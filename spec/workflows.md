# Workflows

## Happy Path Workflows

### Project Creation Workflow
1. Click the "New Project" button (bi-plus-circle icon) in the Projects sidebar header
2. A modal dialog appears with the following fields:
   - **Title** (required): Text input for the project name
   - **Description** (optional): Multi-line textarea for project description
3. User enters project details and clicks "Create Project" button
4. The new project is automatically created with one "Thread 1" tab
5. The new project becomes the active project and is displayed in the sidebar
6. The modal closes and the UI displays the empty project ready for input

### Project Selection Workflow
1. Click on any project in the left sidebar to switch between projects
2. The active project is highlighted with purple background (#e7e8ff)
3. Hovering over a project shows its description as a tooltip
4. Each project maintains its own set of thread tabs and chat history

### Message Submission Workflow
1. User enters a prompt in the multi-line textarea (PROMPT INPUT section)
2. User submits by:
   - Clicking the Send button (bi-send-fill icon), or
   - Pressing Enter key (Shift+Enter for new line without sending)
3. The user message appears in the active tab with purple background
4. The LLM processes the request (simulated with 500ms delay in demo)
5. The AI response appears below the user message with gray background
6. Thread history is maintained per tab
7. Auto-scroll to latest message

### Tab Management Workflow
1. Each project can have multiple thread tabs for parallel discussions
2. Click "Add Tab" button (bi-plus-circle icon) to create a new thread tab
3. Click on any tab to switch between them
4. Each tab maintains its own independent thread history
5. Active tab is highlighted with purple text and bottom border

### Project Management Workflow
1. Click the × button on any project to close it
2. If active project is closed, the first project becomes active
3. Project data (title, description, tabs, messages) is maintained in application state
4. Hovering over a project shows its description as a tooltip

## Alternate Workflows

### Modal Cancellation
1. User clicks "New Project" button
2. Modal opens with empty form
3. User decides not to create project
4. User can cancel by:
   - Clicking the "Cancel" button
   - Clicking the × close button
   - Clicking outside the modal (backdrop)
5. Form fields are cleared and modal closes

### Multi-line Input
1. User types in the prompt textarea
2. User presses Shift+Enter to add a new line
3. Textarea expands vertically (user can also manually resize)
4. User continues editing
5. User presses Enter (without Shift) to submit

### Tab Switching
1. User has multiple tabs open in active project
2. User clicks on a different tab
3. Content area switches to show that tab's conversation history
4. Previous tab's state is preserved

## Error Workflows

### Empty Project Title Validation
1. User clicks "New Project" button
2. Modal opens
3. User leaves title field empty or enters only whitespace
4. User clicks "Create Project"
5. **Expected**: Validation prevents creation (title is required)
6. **Current**: Form should validate before proceeding

### Last Project Protection
1. User has only one project remaining
2. User clicks × button to close it
3. **Expected**: System prevents closing the last project
4. **Rationale**: Prevents empty UI state with no active project

## Loading States

### Message Processing State
1. User submits a prompt
2. Send button is disabled (prevents duplicate submissions)
3. Loading indicator appears (currently simulated with 500ms delay)
4. AI response is being generated
5. Response appears in chat
6. Send button is re-enabled

### Initial Application Load
1. Page loads HTML
2. JavaScript initializes
3. Sample projects are created (3 default projects)
4. First project is set as active
5. UI renders with initial state
6. Event listeners are attached
7. Application is ready for interaction

## Mock AI Response Behavior

The demo includes a mock response generator that:
1. Simulates 500ms processing delay
2. Returns one of 4 random response templates that reference:
   - The user's prompt
   - The selected model (GPT-4, Claude, etc.)
   - The current project name
3. Demonstrates how AI responses would appear in the interface
4. In production, this would be replaced with actual API calls to AI models
