# Acceptance Criteria

## Project Creation Workflow

### AC-PC-1: Open New Project Modal
- **Given** the user is on the main application page
- **When** the user clicks the "New Project" button (bi-plus-circle icon) in the Projects sidebar header
- **Then** a modal dialog appears with title "NEW PROJECT"
- **And** the modal contains a Title input field (required)
- **And** the modal contains a Description textarea (optional)
- **And** the Title input field is automatically focused
- **And** the form fields are empty

### AC-PC-2: Create Project with Valid Data
- **Given** the New Project modal is open
- **When** the user enters a non-empty title (e.g., "My New Project")
- **And** optionally enters a description
- **And** clicks the "Create Project" button
- **Then** the modal closes
- **And** a new project appears in the Projects sidebar
- **And** the new project becomes the active project (purple background)
- **And** the new project contains one tab named "Thread 1"
- **And** the tab content shows the project name and description
- **And** the form fields are cleared for next use

### AC-PC-3: Validate Required Title Field
- **Given** the New Project modal is open
- **When** the user leaves the title field empty or enters only whitespace
- **And** clicks the "Create Project" button
- **Then** the project is not created
- **And** the modal remains open
- **And** validation feedback is shown (implementation required)

### AC-PC-4: Cancel Project Creation
- **Given** the New Project modal is open
- **When** the user clicks "Cancel" OR clicks the × button OR clicks the modal backdrop
- **Then** the modal closes
- **And** no new project is created
- **And** the form fields are cleared

## Project Selection Workflow

### AC-PS-1: Switch Active Project
- **Given** multiple projects exist in the sidebar
- **When** the user clicks on a non-active project
- **Then** the clicked project becomes active (purple background)
- **And** the previously active project returns to default styling
- **And** the main content area shows the selected project's active tab
- **And** all tabs belonging to the selected project are displayed

### AC-PS-2: Display Project Tooltip
- **Given** a project has a description
- **When** the user hovers over the project name
- **Then** a tooltip appears showing the project description

### AC-PS-3: Maintain Project State
- **Given** a project contains multiple tabs with message history
- **When** the user switches to a different project and then back
- **Then** all tabs and messages are preserved
- **And** the previously active tab is still active

## Message Submission Workflow

### AC-MS-1: Submit Message via Send Button
- **Given** the user has entered text in the prompt textarea
- **When** the user clicks the Send button (bi-send-fill icon)
- **Then** the user message appears in the active tab with purple background
- **And** the textarea is cleared
- **And** the content area scrolls to show the new message
- **And** after a brief delay (~500ms), an AI response appears with gray background
- **And** the content area scrolls to show the AI response

### AC-MS-2: Submit Message via Enter Key
- **Given** the user has entered text in the prompt textarea
- **When** the user presses the Enter key (without Shift)
- **Then** the message is submitted (same behavior as clicking Send button)

### AC-MS-3: Add Newline with Shift+Enter
- **Given** the user is typing in the prompt textarea
- **When** the user presses Shift+Enter
- **Then** a newline is inserted in the textarea
- **And** the message is NOT submitted
- **And** the textarea expands vertically to accommodate the new line

### AC-MS-4: Prevent Empty Message Submission
- **Given** the prompt textarea is empty or contains only whitespace
- **When** the user attempts to submit (Send button or Enter key)
- **Then** no message is created
- **And** the textarea remains focused

### AC-MS-5: Display Message Timestamps
- **Given** messages have been submitted
- **Then** each message is stored with a timestamp
- **And** timestamps are used for message ordering (though not currently displayed in UI)

### AC-MS-6: AI Response References Context
- **Given** the user submits a message
- **When** the AI response is generated (mock)
- **Then** the response references:
  * The user's prompt text
  * The selected model name
  * The current project name

## Tab Management Workflow

### AC-TM-1: Create New Tab
- **Given** a project is active
- **When** the user clicks the "Add Tab" button (bi-plus-circle icon)
- **Then** a new tab is created with name "Thread {n}" where n is sequential
- **And** the new tab appears in the tab navigation
- **And** the new tab becomes active
- **And** the new tab's content area is empty with welcome message
- **And** other tabs in the project are preserved

### AC-TM-2: Switch Between Tabs
- **Given** a project has multiple tabs
- **When** the user clicks on a non-active tab
- **Then** the clicked tab becomes active (purple text and border)
- **And** the tab's content area displays its message history
- **And** the previous tab's state is preserved

### AC-TM-3: Maintain Tab Independence
- **Given** a project has multiple tabs
- **When** the user submits messages in different tabs
- **Then** each tab maintains its own independent message history
- **And** messages in one tab do not appear in other tabs

### AC-TM-4: Display Tab State
- **Given** a tab is active
- **Then** the tab text is purple (#6c5ce7)
- **And** the tab has a purple bottom border (2px)
- **And** the tab text font-weight is 500

### AC-TM-5: Tab Persistence Across Project Switches
- **Given** a project has multiple tabs with content
- **When** the user switches to another project and then back
- **Then** all tabs are preserved
- **And** the previously active tab is still active
- **And** all message history is intact

## Project Management Workflow

### AC-PM-1: Close Project
- **Given** multiple projects exist
- **When** the user clicks the × button on a non-active project
- **Then** the project is removed from the sidebar
- **And** the active project remains unchanged

### AC-PM-2: Close Active Project
- **Given** multiple projects exist
- **When** the user clicks the × button on the active project
- **Then** the project is removed from the sidebar
- **And** the first remaining project becomes active

### AC-PM-3: Prevent Closing Last Project
- **Given** only one project exists
- **When** the user attempts to click the × button
- **Then** the project cannot be closed
- **And** the UI prevents this action
- **Rationale**: Prevents empty state with no active project

### AC-PM-4: Project Tooltip Display
- **Given** a project has a description
- **When** the user hovers over the project in the sidebar
- **Then** a tooltip displays the project description

## Model Selection Workflow

### AC-MOD-1: Change Selected Model
- **Given** the model selector dropdown shows the current model
- **When** the user selects a different model from the dropdown
- **Then** the selectedModel state is updated
- **And** the dropdown displays the new model
- **And** future AI responses reference the newly selected model

### AC-MOD-2: Model Persists Across Navigation
- **Given** the user has selected a specific model
- **When** the user switches projects or tabs
- **Then** the selected model remains unchanged
- **And** the dropdown continues to display the selected model

### AC-MOD-3: Available Model Options
- **Given** the user opens the model selector dropdown
- **Then** the following options are available:
  * GPT-4
  * GPT-3.5
  * Claude
  * Gemini

## Initial Application Load

### AC-INIT-1: Default Projects on Load
- **Given** the application is loaded for the first time (or state is cleared)
- **Then** three sample projects are created:
  * Sample Project 1: "An example project to demonstrate the UI"
  * Sample Project 2: "Another example project"
  * Sample Project 3: "Third example project"
- **And** each project has one tab named "Thread 1"
- **And** each tab has an empty message history
- **And** Sample Project 1 is active by default

### AC-INIT-2: Default Model Selection
- **Given** the application is loaded for the first time
- **Then** the model selector displays "GPT-4" as the default
- **And** the selectedModel state is set to "GPT-4"

### AC-INIT-3: UI Ready State
- **Given** the application has completed initialization
- **Then** all event listeners are attached and functional
- **And** the UI is fully rendered and interactive
- **And** the prompt textarea is ready for input

## Visual and Interaction States

### AC-VIS-1: Hover States
- **Given** the user hovers over any interactive element
- **Then** visual feedback is provided:
  * Buttons: Light gray background (#f8f9fa)
  * Primary button (Send): Darker purple (#5f4dd1) with subtle transform
  * Projects: Light gray background (#f8f9fa)
  * Tabs: Light gray background (#f8f9fa)
  * Messages: Slightly darker background

### AC-VIS-2: Focus States
- **Given** the user focuses on a form input
- **Then** visual feedback is provided:
  * Purple border (#6c5ce7)
  * Subtle shadow effect

### AC-VIS-3: Active States
- **Given** an element is in active state
- **Then** visual indicators are shown:
  * Active project: Purple background (#e7e8ff), purple text (#6c5ce7)
  * Active tab: Purple text (#6c5ce7), purple bottom border (2px), 500 font weight

### AC-VIS-4: Auto-scroll to Latest Message
- **Given** a new message (user or assistant) is added
- **Then** the tab content scrolls to the bottom
- **And** the latest message is visible

## Error Handling and Edge Cases

### AC-ERR-1: Empty Textarea Submit Prevention
- **Given** the prompt textarea is empty
- **When** the user clicks Send or presses Enter
- **Then** no message is created
- **And** no state change occurs

### AC-ERR-2: Last Project Protection
- **Given** only one project exists
- **When** the user attempts to close it
- **Then** the close action is prevented
- **And** the project remains in the sidebar

### AC-ERR-3: XSS Prevention
- **Given** the user enters HTML or script tags in any input field
- **When** the content is displayed in the UI
- **Then** all content is properly escaped
- **And** no scripts are executed
- **And** HTML is displayed as plain text

### AC-ERR-4: Modal Form Reset
- **Given** the user has entered data in the New Project modal
- **When** the modal is closed (any method)
- **And** the modal is reopened
- **Then** all form fields are empty
- **And** no previous data is retained

## Accessibility

### AC-A11Y-1: Icon Button Tooltips
- **Given** any icon-only button
- **When** the user hovers or focuses on the button
- **Then** a tooltip appears describing the button's function

### AC-A11Y-2: Keyboard Navigation
- **Given** the user navigates using keyboard only
- **Then** all interactive elements are reachable via Tab key
- **And** Enter/Space keys activate buttons
- **And** Escape key closes modals

### AC-A11Y-3: Form Input Focus
- **Given** a modal or form is opened
- **Then** the first input field receives automatic focus
- **Example**: Title input in New Project modal

## Performance

### AC-PERF-1: Message Processing Delay
- **Given** the user submits a message
- **Then** the mock AI response appears after ~500ms delay
- **And** the UI remains responsive during processing

### AC-PERF-2: State Update Responsiveness
- **Given** any state change (project switch, tab switch, message add)
- **Then** the UI updates immediately (< 100ms perceived delay)
- **And** all relevant components re-render correctly

### AC-PERF-3: Scroll Performance
- **Given** a tab has many messages (10+)
- **When** a new message is added
- **Then** auto-scroll to bottom occurs smoothly
- **And** scroll animation completes within 300ms
