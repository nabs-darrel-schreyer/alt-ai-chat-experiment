# Alternative AI Chat UI Specification

AI chat interfaces typically present a three-column (or two-column) layout with conversation history, message input at the bottom, and sidebar navigation. This specification describes an alternative approach that positions the prompt input at the top and uses a tabbed interface for multiple discussion threads.

## A Different Approach

This UI experiments with a different layout that prioritizes prompt input visibility and enables multiple thread tabs within a single project.

## Page Layout

The layout consists of four main sections:

1. **Top: Button Bar** - Fixed toolbar with icon-based controls, model selector, and global actions
2. **Left Sidebar: Projects** - Project management with active state indication
3. **Top Content: Prompt Input** - Multi-line text input area with control buttons
4. **Main Content: Tabbed Windows** - Thread areas with tab navigation for multiple discussion threads

In this UI, the user can have multiple thread tabs open within each project, allowing parallel discussions and comparison of different interaction threads.

## Component Specifications

### 1. Button Bar

**Layout:**
- Full-width fixed header at the top of the page
- Three button groups: left (actions), center (model selector), right (user controls)
- White background (#ffffff) with subtle bottom border (#e9ecef)
- Compact padding: 0.5rem 1rem

**Buttons:**
- All buttons use **icon-only design** with tooltips for accessibility
- Icon buttons: New Chat, Save, Export, Settings (left) | Search, History, Account (right)
- Icons from Bootstrap Icons library
- Style: Transparent background, gray icons (#6c757d), 0.95rem font size
- Hover: Light gray background (#f8f9fa)
- Padding: 0.4rem 0.6rem
- Border radius: 4px

**Model Selector:**
- Dropdown select in center group
- Border: 1px solid #dee2e6
- Font size: 13px
- Padding: 0.375rem 0.75rem
- Options: GPT-4, GPT-3.5, Claude, Gemini

### 2. Left Sidebar - Projects

**Layout:**
- Fixed width: 260px
- White background (#ffffff)
- Right border: 1px solid #e9ecef
- Contains header and scrollable project list

**Header:**
- Section title: "PROJECTS" (uppercase)
- Style: 11px font, gray color (#6c757d), 600 weight, 0.5px letter-spacing
- New Project button: Icon-only (bi-plus-circle), minimal style with border
- Padding: 1rem
- Bottom border: 1px solid #e9ecef

**New Project Button:**
- Icon-only with tooltip "New Project"
- Transparent background, gray border (#dee2e6)
- Icon: bi-plus-circle, 13px font size
- Min-width: 32px
- Padding: 0.4rem 0.5rem
- Hover: Gray background (#f8f9fa)

**Project List:**
- Scrollable area with project items
- Each item shows project name and close button (×)
- Active project: Purple background (#e7e8ff), purple text (#6c5ce7)
- Hover: Light gray background (#f8f9fa)
- Font size: 13px
- Padding: 0.5rem 0.75rem per item

### 3. Prompt Input Section

**Layout:**
- White background (#ffffff)
- Bottom border: 1px solid #e9ecef
- Padding: 0.875rem 1.25rem

**Header Row:**
- Section title: "PROMPT INPUT" (uppercase)
- Style: 11px font, gray color (#6c757d), 600 weight, 0.5px letter-spacing
- Control buttons on right: Attach (bi-paperclip), Templates (bi-file-text)
- Margin bottom: 0.625rem

**Control Buttons:**
- Icon-only with tooltips
- Transparent background with border (#dee2e6)
- Icon size: 13px
- Min-width: 32px
- Gap between buttons: 0.5rem
- Hover: Light gray background (#f8f9fa)

**Input Row:**
- Flexbox layout with textarea and send button side-by-side
- Gap: 0.5rem
- Align items: flex-start

**Textarea:**
- Flex: 1 (takes available width)
- Min-height: 100px
- Font size: 13px
- Padding: 0.75rem
- Border: 1px solid #ced4da
- Border radius: 4px
- Vertical resize enabled
- Placeholder: "Enter your prompt here..."
- Focus: Gray border (#adb5bd) with subtle shadow

**Send Button:**
- Icon-only (bi-send-fill) positioned to the right of textarea
- Purple background (#6c5ce7)
- White icon color
- Icon size: 13px
- Min-width: 32px
- Padding: 0.4rem 0.5rem
- Border radius: 4px
- Align-self: flex-start
- Hover: Darker purple (#5f4dd1) with subtle lift effect
- **Note:** Clear button has been removed from the design

### 4. Tabbed Content Area

**Layout:**
- Flex container taking remaining vertical space
- White background (#ffffff)

**Tabs Header:**
- Horizontal tab navigation
- White background with bottom border (#e9ecef)
- Padding: 0.5rem 1rem (top and sides, no bottom padding)
- Gap between tabs: 0.25rem

**Tab Items:**
- Font size: 12px
- Padding: 0.5rem 1rem
- Color: Gray (#6c757d)
- Border: Transparent
- Border radius: 4px 4px 0 0
- Cursor: pointer
- Active state: Purple text (#6c5ce7), purple bottom border (2px), 500 font weight
- Hover: Light background (#f8f9fa)

**Add Tab Button:**
- Icon-only (bi-plus-circle) at end of tab list
- Transparent background, no border
- Gray icon (#adb5bd), 13px size
- Padding: 0.5rem 0.75rem
- Hover: Darker gray (#6c757d)
- Tooltip: "Add Tab"

**Tab Content:**
- Scrollable content area
- Padding: 2rem
- White background (#ffffff)
- Contains thread messages and chat history
- Max-width: 900px (centered)
- Empty state shows project name, description, and welcome message

**Message Display:**
- User messages:
  * Light purple background (#e7e8ff)
  * Purple left border (3px solid #6c5ce7)
  * Rounded on right side (0 8px 8px 0)
  * Hover: Darker purple background (#dfe0ff)
- Assistant messages:
  * Light gray background (#f8f9fa)
  * Purple left border (3px solid #6c5ce7)
  * Rounded on right side (0 8px 8px 0)
  * Hover: Darker gray background (#f1f3f5)
- Message styling:
  * Padding: 1rem
  * Font size: 13px
  * Line height: 1.6
  * Margin bottom: 1.5rem between messages
  * Text color: #212529

### 5. New Project Modal

**Modal Container:**
- Fixed position overlay covering entire viewport
- Semi-transparent dark backdrop (rgba(0, 0, 0, 0.5))
- Z-index: 1000
- Flexbox centered alignment
- Hidden by default, shown with "show" class

**Modal Content:**
- White background (#ffffff)
- Border radius: 8px
- Max width: 500px, 90% viewport width on smaller screens
- Box shadow: 0 4px 12px rgba(0, 0, 0, 0.15)

**Modal Header:**
- "NEW PROJECT" title (11px, uppercase, gray #6c757d)
- Close button (×) on right side
- Padding: 1rem 1.25rem
- Bottom border: 1px solid #e9ecef

**Modal Body:**
- Padding: 1.25rem
- Two form groups:
  1. **Title Input**: Required text field, 13px font, placeholder "Enter project title"
  2. **Description Textarea**: Optional multi-line field, 13px font, 3 rows, placeholder "Enter project description"

**Form Controls:**
- Full width inputs with padding: 0.75rem
- Border: 1px solid #ced4da
- Border radius: 4px
- Focus state: Purple border (#6c5ce7) with subtle shadow
- Font size: 13px

**Modal Footer:**
- Right-aligned button group
- Padding: 1rem 1.25rem
- Top border: 1px solid #e9ecef
- Gap between buttons: 0.75rem

**Buttons:**
- **Cancel**: Secondary style (transparent background, gray text, border)
- **Create Project**: Primary style (purple #6c5ce7 background, white text)
- Both buttons: 13px font, 0.5rem 1rem padding, border radius 4px

## Design System

### Typography
- Base font size: 13px
- System font stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
- Section headings: 11px, uppercase, 600 weight, 0.5px letter-spacing
- Tab text: 12px
- Input text: 13px
- Message content: 13px
- Icons: 13px (icon buttons), 0.95rem (toolbar icons)

### Color Palette
- Primary accent: Purple (#6c5ce7, hover: #5f4dd1)
- Text: Dark gray (#495057, secondary: #6c757d, muted: #adb5bd)
- Borders: Light gray (#dee2e6, #e9ecef)
- Backgrounds: White (#ffffff), light gray (#f8f9fa)
- Active states: Light purple (#e7e8ff)

### Spacing
- Compact padding throughout (0.4-0.875rem range)
- Consistent gaps: 0.25-0.625rem
- Border radius: 4px for all rounded elements
- Min button width: 32px for icon-only buttons

### Components
- Bootstrap 5.3.3 CSS framework from CDN
- Bootstrap Icons 1.11.3 for all iconography
- Custom CSS overrides for minimal, flat design aesthetic

## Key Design Principles

1. **Icon-First Interface**: All buttons use icons with tooltips instead of text labels for a clean, minimal appearance
2. **Consistent Headings**: Section headers use identical styling (11px uppercase gray text with 0.5px letter-spacing)
3. **Minimal Button Design**: Transparent or subtle backgrounds with borders, avoiding heavy visual weight
4. **Compact Spacing**: Reduced padding and margins throughout for efficient space usage (0.4-2rem range)
5. **Flat Design**: No gradients, minimal shadows (only on hover for primary buttons), clean lines and borders
6. **Purple Accents**: Purple color (#6c5ce7) for primary actions and active states throughout the interface
7. **Flexible Layout**: Flexbox-based structure with fixed sidebar (260px) and flexible content areas
8. **Hover Feedback**: Subtle hover states on all interactive elements (background changes, border colors, slight transforms)
9. **Auto-Scroll**: Messages automatically scroll to the latest entry for better UX
10. **HTML Escaping**: All user-generated content is escaped to prevent XSS vulnerabilities

## Workflow

The user interacts with the application as follows:

### Project Creation
1. Click the "New Project" button (bi-plus-circle icon) in the Projects sidebar header
2. A modal dialog appears with the following fields:
   - **Title** (required): Text input for the project name
   - **Description** (optional): Multi-line textarea for project description
3. User enters project details and clicks "Create Project" button
4. The new project is automatically created with one "Thread 1" tab
5. The new project becomes the active project and is displayed in the sidebar
6. The modal closes and the UI displays the empty project ready for input

### Project Selection
1. Click on any project in the left sidebar to switch between projects
2. The active project is highlighted with purple background (#e7e8ff)
3. Hovering over a project shows its description as a tooltip
4. Each project maintains its own set of thread tabs and chat history

### Message Workflow
1. User enters a prompt in the multi-line textarea (PROMPT INPUT section)
2. User submits by:
   - Clicking the Send button (bi-send-fill icon), or
   - Pressing Enter key (Shift+Enter for new line without sending)
3. The user message appears in the active tab with purple background
4. The LLM processes the request (simulated with 500ms delay in demo)
5. The AI response appears below the user message with gray background
6. Thread history is maintained per tab
7. Auto-scroll to latest message

### Tab Management
1. Each project can have multiple thread tabs for parallel discussions
2. Click "Add Tab" button (bi-plus-circle icon) to create a new thread tab
3. Click on any tab to switch between them
4. Each tab maintains its own independent thread history
5. Active tab is highlighted with purple text and bottom border

### Project Management
1. Click the × button on any project to close it
2. **Cannot close the last remaining project** (this prevents empty UI state)
3. If active project is closed, the first project becomes active
4. Project data (title, description, tabs, messages) is maintained in application state
5. Hovering over a project shows its description as a tooltip

### Mock AI Response
The demo includes a mock response generator that:
1. Simulates 500ms processing delay
2. Returns one of 4 random response templates that reference:
   - The user's prompt
   - The selected model (GPT-4, Claude, etc.)
   - The current project name
3. Demonstrates how AI responses would appear in the interface
4. In production, this would be replaced with actual API calls to AI models

## Technical Implementation

### Files Structure
- **index.html** (127 lines): Complete HTML structure with all UI components
- **site.css** (527 lines): Complete styling including modal, messages, and all components
- **app.ts** (394 lines): TypeScript source with type definitions
- **app.js** (361 lines): JavaScript version for browser execution
- **tsconfig.json**: TypeScript compiler configuration
- **README.md**: Project documentation and setup instructions
- **spec/alt-chat-ui.spec.md**: This specification document

### Language
- **TypeScript** (app.ts) with full type definitions for:
  - Message: role ('user' | 'assistant'), content (string), timestamp (Date)
  - Tab: id (number), name (string), messages (Message[])
  - Project: id (number), name (string), description (string), tabs (Tab[]), activeTabId (number)
  - AppState: projects (Project[]), activeProjectId (number), nextProjectId (number), nextTabId (number), selectedModel (string)
- **JavaScript** (app.js) - Compiled/compatible version for browser execution
- **TypeScript Configuration**: ES2020 target, strict mode, DOM lib, outputs to root directory

### Modal Dialog Structure
The New Project modal includes:
- **Header**: "NEW PROJECT" title (11px uppercase) with close button (×)
- **Body**: Form with two fields:
  * Title input (required, auto-focused when modal opens)
  * Description textarea (optional, 3 rows)
- **Footer**: Cancel (secondary) and Create Project (primary) buttons
- **Show/Hide Behavior**:
  * Modal displayed by adding "show" class (display: flex)
  * Hidden by removing "show" class (display: none)
  * Closes on backdrop click, × button, or Cancel button
  * Clears input fields when opened
- **Validation**: Create button validates title is not empty before proceeding
- **Styling**: Fixed overlay with centered content, semi-transparent backdrop

### State Management
All application state is maintained in a centralized state object:
- **Projects array**: Each project contains:
  * id, name, description
  * tabs array (each tab has id, name, messages array)
  * activeTabId (which tab is currently displayed)
- **activeProjectId**: Currently selected project
- **Auto-incrementing counters**: nextProjectId and nextTabId
- **selectedModel**: Currently selected AI model (default: 'GPT-4')

### Sample Initial Data
The application loads with 3 sample projects:
- Sample Project 1: "An example project to demonstrate the UI"
- Sample Project 2: "Another example project"
- Sample Project 3: "Third example project"
- Each starts with one "Thread 1" tab with empty messages

### Event Handling
- **DOMContentLoaded**: Initializes event listeners and renders initial UI
- **Project interactions**:
  * Click to select project
  * Click × to close project (with stopPropagation to prevent selection)
  * New project button opens modal
- **Tab interactions**:
  * Click tab to switch threads
  * Add tab button creates new thread
- **Message sending**:
  * Click send button
  * Press Enter key (Shift+Enter for newline without sending)
  * Auto-clears input after sending
  * Auto-scrolls to latest message
- **Modal interactions**:
  * Show/hide with class toggle
  * Close on backdrop click
  * Close on × button or Cancel button
  * Create validates title field is not empty
  * Focus on title input when opened
- **Model selection**: Dropdown change updates state
- **Dynamic rendering**: Projects, tabs, and messages re-render on state changes

