# Layout

## Page Layout

The layout consists of four main sections:

1. **Top: Button Bar** - Fixed toolbar with icon-based controls, model selector, and global actions
2. **Left Sidebar: Projects** - Project management with active state indication
3. **Top Content: Prompt Input** - Multi-line text input area with control buttons
4. **Main Content: Tabbed Windows** - Thread areas with tab navigation for multiple discussion threads

In this UI, the user can have multiple thread tabs open within each project, allowing parallel discussions and comparison of different interaction threads.

## Component Structure

### 1. Button Bar

**Layout:**
- Full-width fixed header at the top of the page
- Three button groups: left (actions), center (model selector), right (user controls)
- Compact padding: 0.5rem 1rem

**Elements:**
- All buttons use **icon-only design** with tooltips for accessibility
- Icon buttons: New Chat, Save, Export, Settings (left) | Search, History, Account (right)
- Icons from Bootstrap Icons library
- Model selector dropdown in center group

### 2. Left Sidebar - Projects

**Layout:**
- Fixed width: 260px
- Right border: 1px solid #e9ecef
- Contains header and scrollable project list

**Header:**
- Section title: "PROJECTS" (uppercase)
- New Project button: Icon-only (bi-plus-circle), minimal style with border
- Padding: 1rem
- Bottom border: 1px solid #e9ecef

**Project List:**
- Scrollable area with project items
- Each item shows project name and close button (×)

### 3. Prompt Input Section

**Layout:**
- White background (#ffffff)
- Bottom border: 1px solid #e9ecef
- Padding: 0.875rem 1.25rem

**Header Row:**
- Section title: "PROMPT INPUT" (uppercase)
- Control buttons on right: Attach (bi-paperclip), Templates (bi-file-text)
- Margin bottom: 0.625rem

**Input Row:**
- Flexbox layout with textarea and send button side-by-side
- Gap: 0.5rem
- Align items: flex-start

**Textarea:**
- Flex: 1 (takes available width)
- Min-height: 100px
- Vertical resize enabled
- Placeholder: "Enter your prompt here..."

**Send Button:**
- Icon-only (bi-send-fill) positioned to the right of textarea
- Align-self: flex-start

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
- Horizontal list of tab buttons
- Active state: Purple text (#6c5ce7), purple bottom border (2px)

**Add Tab Button:**
- Icon-only (bi-plus-circle) at end of tab list
- Tooltip: "Add Tab"

**Tab Content:**
- Scrollable content area
- Padding: 2rem
- Max-width: 900px (centered)
- Empty state shows project name, description, and welcome message

**Message Display:**
- User messages: Light purple background (#e7e8ff), purple left border (3px)
- Assistant messages: Light gray background (#f8f9fa), purple left border (3px)
- Both rounded on right side (0 8px 8px 0)
- Margin bottom: 1.5rem between messages

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
- "NEW PROJECT" title (11px, uppercase)
- Close button (×) on right side
- Padding: 1rem 1.25rem
- Bottom border: 1px solid #e9ecef

**Modal Body:**
- Padding: 1.25rem
- Two form groups:
  1. **Title Input**: Required text field
  2. **Description Textarea**: Optional multi-line field, 3 rows

**Modal Footer:**
- Right-aligned button group
- Padding: 1rem 1.25rem
- Top border: 1px solid #e9ecef
- Gap between buttons: 0.75rem
- Contains: Cancel and Create Project buttons

## Component Tree

```
App
├── Button Bar
│   ├── Left Group (New Chat, Save, Export, Settings icons)
│   ├── Center Group (Model Selector dropdown)
│   └── Right Group (Search, History, Account icons)
├── Projects Sidebar
│   ├── Header
│   │   ├── "PROJECTS" title
│   │   └── New Project button
│   └── Project List (scrollable)
│       └── Project Items (name + close button)
├── Main Content Area
│   ├── Prompt Input Section
│   │   ├── Header Row
│   │   │   ├── "PROMPT INPUT" title
│   │   │   └── Control buttons (Attach, Templates)
│   │   └── Input Row
│   │       ├── Textarea (flex: 1)
│   │       └── Send button
│   └── Tabbed Content
│       ├── Tabs Header
│       │   ├── Tab Items
│       │   └── Add Tab button
│       └── Tab Content (scrollable)
│           └── Messages (User/Assistant alternating)
└── New Project Modal (hidden by default)
    ├── Modal Header (title + close)
    ├── Modal Body (form fields)
    └── Modal Footer (Cancel + Create buttons)
```

## Responsive Rules

**Current State**: Desktop-only layout, responsive design not yet implemented.

**Future Considerations**:
- Sidebar should collapse to hamburger menu on tablet/mobile
- Fixed sidebar width (260px) should become flexible
- Prompt input should remain accessible at all viewport sizes
- Tab navigation may need to scroll horizontally on narrow screens
- Button bar may need to stack or hide less critical buttons

## Files Structure

- **index.html** (127 lines): Complete HTML structure with all UI components
- **site.css** (527 lines): Complete styling including modal, messages, and all components
- **app.ts** (394 lines): TypeScript source with type definitions
- **app.js** (361 lines): JavaScript version for browser execution
- **tsconfig.json**: TypeScript compiler configuration
- **README.md**: Project documentation and setup instructions
- **spec/**: Specification documents
