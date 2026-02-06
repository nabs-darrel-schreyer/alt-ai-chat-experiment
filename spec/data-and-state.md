# Data and State Management

## Type Definitions

### TypeScript Types

**Message Interface:**
```typescript
interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
```

**Tab Interface:**
```typescript
interface Tab {
  id: number;
  name: string;
  messages: Message[];
}
```

**Project Interface:**
```typescript
interface Project {
  id: number;
  name: string;
  description: string;
  tabs: Tab[];
  activeTabId: number;
}
```

**AppState Interface:**
```typescript
interface AppState {
  projects: Project[];
  activeProjectId: number;
  nextProjectId: number;
  nextTabId: number;
  selectedModel: string;
}
```

## State Management

### Centralized State Object

All application state is maintained in a centralized state object with the following structure:

**Projects Array:**
- Each project contains:
  * `id`: Unique numeric identifier
  * `name`: Project title (string)
  * `description`: Project description (string)
  * `tabs`: Array of Tab objects
  * `activeTabId`: ID of currently displayed tab (number)

**Top-Level State:**
- `projects`: Array of all Project objects
- `activeProjectId`: ID of currently selected project
- `nextProjectId`: Auto-incrementing counter for new project IDs
- `nextTabId`: Auto-incrementing counter for new tab IDs
- `selectedModel`: Currently selected AI model (string, default: 'GPT-4')

### Sample Initial Data

The application loads with 3 sample projects:

```typescript
{
  projects: [
    {
      id: 1,
      name: "Sample Project 1",
      description: "An example project to demonstrate the UI",
      tabs: [{ id: 1, name: "Thread 1", messages: [] }],
      activeTabId: 1
    },
    {
      id: 2,
      name: "Sample Project 2",
      description: "Another example project",
      tabs: [{ id: 2, name: "Thread 1", messages: [] }],
      activeTabId: 2
    },
    {
      id: 3,
      name: "Sample Project 3",
      description: "Third example project",
      tabs: [{ id: 3, name: "Thread 1", messages: [] }],
      activeTabId: 3
    }
  ],
  activeProjectId: 1,
  nextProjectId: 4,
  nextTabId: 4,
  selectedModel: 'GPT-4'
}
```

## Data Contracts

### Message Contract
- **role**: Must be either 'user' or 'assistant' (enforced by TypeScript type)
- **content**: Non-empty string containing message text
- **timestamp**: Date object representing when message was created

### Tab Contract
- **id**: Unique positive integer
- **name**: String in format "Thread {n}" where n is sequential
- **messages**: Array of Message objects (can be empty)

### Project Contract
- **id**: Unique positive integer
- **name**: Non-empty string (validated on creation)
- **description**: String (can be empty)
- **tabs**: Non-empty array containing at least one Tab (initial tab created automatically)
- **activeTabId**: Must reference a valid tab ID within the project's tabs array

### AppState Contract
- **projects**: Non-empty array (at least one project must exist)
- **activeProjectId**: Must reference a valid project ID
- **nextProjectId**: Must be greater than all existing project IDs
- **nextTabId**: Must be greater than all existing tab IDs
- **selectedModel**: One of: 'GPT-4', 'GPT-3.5', 'Claude', 'Gemini'

## Validation Rules

### Project Creation
- Title field is required (cannot be empty or whitespace-only)
- Description field is optional
- New project automatically gets one tab named "Thread 1"
- New project becomes the active project immediately

### Project Deletion
- Cannot delete the last remaining project
- If deleting active project, first project in list becomes active
- All project data (tabs, messages) is removed from state

### Tab Creation
- Tab names are auto-generated as "Thread {n}"
- Each tab gets a unique ID from nextTabId counter
- New tab is created with empty messages array
- Tab is added to current project's tabs array

### Message Creation
- Content cannot be empty (enforced by send button logic)
- Role is always 'user' for user-submitted messages
- Role is always 'assistant' for AI-generated responses
- Timestamp is automatically set to current Date

### Model Selection
- Must be one of the predefined models: GPT-4, GPT-3.5, Claude, Gemini
- Default model is GPT-4
- Model selection persists across project/tab switches

## Caching

**Current Implementation:**
- No caching implemented (all data in-memory only)
- State is lost on page refresh

**Future Considerations:**
- localStorage for state persistence
- Session-based caching
- API response caching for repeated queries
- Message history pagination and lazy loading

## Concurrency

### Current Handling

**Message Submission:**
- Send button should be disabled during AI response generation
- Prevents duplicate message submissions
- Processing indicated by 500ms simulated delay

**State Updates:**
- All state updates are synchronous
- No concurrent access issues in single-threaded JavaScript environment
- UI re-renders after each state change

**Tab/Project Switching:**
- Instant switching with no async operations
- Previous state is preserved when switching back

### Future Considerations

**API Integration:**
- Handle concurrent API requests
- Cancel pending requests on tab/project switch
- Queue multiple message submissions
- Handle API timeout and retry logic

**Real-time Updates:**
- WebSocket connections for streaming responses
- Optimistic UI updates
- Conflict resolution for collaborative editing

## Event Handling

### Initialization
- **DOMContentLoaded**: Initializes event listeners and renders initial UI
- Creates sample projects
- Sets up all event handlers
- Renders initial state

### Project Interactions
- **Click project**: Sets project as active, triggers re-render
- **Click × button**: Deletes project (with validation), updates active project if needed
- **Click New Project button**: Opens modal dialog
- **Hover project**: Shows description tooltip

### Tab Interactions
- **Click tab**: Sets tab as active within project, triggers content re-render
- **Click Add Tab button**: Creates new tab, updates state, re-renders tabs

### Message Interactions
- **Click Send button**: Validates input, adds user message, triggers AI response
- **Press Enter key**: Same as Send button (Shift+Enter adds newline)
- **Type in textarea**: Updates input value (no state change until submission)

### Modal Interactions
- **Click New Project modal button**: Opens modal, focuses title input
- **Click modal backdrop**: Closes modal, clears form
- **Click × close button**: Closes modal, clears form
- **Click Cancel button**: Closes modal, clears form
- **Click Create Project button**: Validates form, creates project, closes modal
- **Focus title input**: Auto-focused when modal opens

### Model Selection
- **Change model dropdown**: Updates selectedModel in state
- Model persists across project/tab switches

### Auto-scroll Behavior
- **After message added**: Scrolls tab content to bottom
- Ensures latest message is visible
- Smooth scrolling behavior

## Data Flow

### Message Submission Flow
1. User types in textarea
2. User clicks Send or presses Enter
3. Input validation (non-empty)
4. User message created with current timestamp
5. Message added to active tab's messages array
6. Textarea cleared
7. UI re-rendered (message appears)
8. Auto-scroll to bottom
9. AI processing triggered (500ms delay)
10. Assistant message created
11. Message added to active tab's messages array
12. UI re-rendered (response appears)
13. Auto-scroll to bottom

### Project Creation Flow
1. User clicks New Project button
2. Modal displayed
3. Title input focused
4. User enters data
5. User clicks Create Project
6. Form validation (title required)
7. New project object created with unique ID
8. Project added to state.projects array
9. Project set as activeProjectId
10. nextProjectId incremented
11. Modal closed and cleared
12. UI re-rendered (new project appears and is active)

### State Update Pattern
1. User action triggers event handler
2. Event handler updates state object
3. Re-render functions called with updated state
4. DOM updated to reflect new state
5. Auto-scroll or focus adjustments if needed

## Technical Implementation

### Language
- **TypeScript** (app.ts) with full type definitions
- **JavaScript** (app.js) - Compiled/compatible version for browser execution
- **TypeScript Configuration**: ES2020 target, strict mode, DOM lib, outputs to root directory

### Files
- **app.ts**: TypeScript source (394 lines)
- **app.js**: JavaScript output (361 lines)
- **tsconfig.json**: Compiler configuration

### Dependencies
- No external JavaScript libraries (vanilla TypeScript/JavaScript)
- Uses browser-native DOM APIs
- Bootstrap CSS and Icons loaded from CDN (styling only, no JavaScript)
