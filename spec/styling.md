# Styling

## Design System

### Typography

**Font Stack:**
```css
-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
```

**Font Sizes:**
- Base font size: 13px
- Section headings: 11px, uppercase, 600 weight, 0.5px letter-spacing
- Tab text: 12px
- Input text: 13px
- Message content: 13px
- Icons: 13px (icon buttons), 0.95rem (toolbar icons)

**Line Heights:**
- Message content: 1.6
- Default: 1.5 (inherited from browser defaults)

### Color Palette

**Primary Colors:**
- Primary accent: Purple `#6c5ce7`
- Primary hover: Darker purple `#5f4dd1`

**Text Colors:**
- Primary text: Dark gray `#495057`
- Secondary text: Gray `#6c757d`
- Muted text: Light gray `#adb5bd`

**Border Colors:**
- Default border: `#dee2e6`
- Section border: `#e9ecef`
- Focus border: `#ced4da`
- Hover border: `#adb5bd`

**Background Colors:**
- Primary background: White `#ffffff`
- Secondary background: Light gray `#f8f9fa`
- Hover background: Light gray `#f8f9fa`
- Active state background: Light purple `#e7e8ff`
- Message user background: Light purple `#e7e8ff`
- Message user hover: Darker purple `#dfe0ff`
- Message assistant background: Light gray `#f8f9fa`
- Message assistant hover: Darker gray `#f1f3f5`
- Modal backdrop: `rgba(0, 0, 0, 0.5)`

### Spacing System

**Padding Scale:**
- Extra compact: 0.4rem
- Compact: 0.5rem
- Small: 0.75rem
- Medium: 1rem
- Large: 1.25rem
- Extra large: 2rem

**Margins:**
- Between elements: 0.625rem
- Between messages: 1.5rem
- Section margins: 1rem - 2rem

**Gaps:**
- Button groups: 0.5rem
- Tab items: 0.25rem
- Modal footer buttons: 0.75rem

### Border Radius

- Standard radius: 4px
- Modal radius: 8px
- Message right side: 0 8px 8px 0 (left border accent style)
- Tab items: 4px 4px 0 0 (rounded top only)

### Shadows

**Box Shadows:**
- Modal: `0 4px 12px rgba(0, 0, 0, 0.15)`
- Focus states: Subtle shadow on form controls with purple border

**Elevation:**
- Modal: Z-index 1000
- Minimal use of shadows (flat design principle)

## Component Styling

### 1. Button Bar

**Container:**
- Background: White `#ffffff`
- Bottom border: 1px solid `#e9ecef`
- Padding: 0.5rem 1rem

**Icon Buttons:**
- Background: Transparent
- Icon color: Gray `#6c757d`
- Icon size: 0.95rem
- Padding: 0.4rem 0.6rem
- Border radius: 4px
- Hover: Light gray background `#f8f9fa`

**Model Selector:**
- Border: 1px solid `#dee2e6`
- Font size: 13px
- Padding: 0.375rem 0.75rem

### 2. Left Sidebar - Projects

**Container:**
- Background: White `#ffffff`
- Right border: 1px solid `#e9ecef`

**Header:**
- Section title color: Gray `#6c757d`
- Bottom border: 1px solid `#e9ecef`

**New Project Button:**
- Background: Transparent
- Border: Gray `#dee2e6`
- Icon: bi-plus-circle, 13px
- Min-width: 32px
- Padding: 0.4rem 0.5rem
- Hover: Gray background `#f8f9fa`

**Project Items:**
- Default: Transparent background
- Active: Purple background `#e7e8ff`, purple text `#6c5ce7`
- Hover: Light gray background `#f8f9fa`
- Font size: 13px
- Padding: 0.5rem 0.75rem

### 3. Prompt Input Section

**Container:**
- Background: White `#ffffff`
- Bottom border: 1px solid `#e9ecef`
- Padding: 0.875rem 1.25rem

**Header:**
- Title color: Gray `#6c757d`

**Control Buttons:**
- Background: Transparent
- Border: 1px solid `#dee2e6`
- Icon size: 13px
- Min-width: 32px
- Hover: Light gray background `#f8f9fa`

**Textarea:**
- Font size: 13px
- Padding: 0.75rem
- Border: 1px solid `#ced4da`
- Border radius: 4px
- Focus: Gray border `#adb5bd` with subtle shadow

**Send Button:**
- Background: Purple `#6c5ce7`
- Icon color: White
- Icon size: 13px
- Min-width: 32px
- Padding: 0.4rem 0.5rem
- Border radius: 4px
- Hover: Darker purple `#5f4dd1` with subtle lift effect

### 4. Tabbed Content Area

**Tabs Header:**
- Background: White
- Bottom border: 1px solid `#e9ecef`
- Padding: 0.5rem 1rem

**Tab Items:**
- Font size: 12px
- Padding: 0.5rem 1rem
- Default color: Gray `#6c757d`
- Border: Transparent
- Border radius: 4px 4px 0 0
- Active: Purple text `#6c5ce7`, purple bottom border (2px), 500 font weight
- Hover: Light background `#f8f9fa`

**Add Tab Button:**
- Background: Transparent
- Icon color: Gray `#adb5bd`, 13px size
- Padding: 0.5rem 0.75rem
- Hover: Darker gray `#6c757d`

**Tab Content:**
- Background: White `#ffffff`
- Padding: 2rem

**Messages:**
- User messages:
  * Background: Light purple `#e7e8ff`
  * Left border: 3px solid purple `#6c5ce7`
  * Border radius: 0 8px 8px 0
  * Hover: Darker purple `#dfe0ff`
- Assistant messages:
  * Background: Light gray `#f8f9fa`
  * Left border: 3px solid purple `#6c5ce7`
  * Border radius: 0 8px 8px 0
  * Hover: Darker gray `#f1f3f5`
- Both message types:
  * Padding: 1rem
  * Font size: 13px
  * Line height: 1.6
  * Margin bottom: 1.5rem
  * Text color: `#212529`

### 5. New Project Modal

**Modal Container:**
- Background: `rgba(0, 0, 0, 0.5)` (backdrop)
- Display: none (default), flex when "show" class added

**Modal Content:**
- Background: White `#ffffff`
- Border radius: 8px
- Box shadow: `0 4px 12px rgba(0, 0, 0, 0.15)`

**Modal Header:**
- Padding: 1rem 1.25rem
- Bottom border: 1px solid `#e9ecef`

**Modal Body:**
- Padding: 1.25rem

**Form Controls:**
- Padding: 0.75rem
- Border: 1px solid `#ced4da`
- Border radius: 4px
- Font size: 13px
- Focus: Purple border `#6c5ce7` with subtle shadow

**Modal Footer:**
- Padding: 1rem 1.25rem
- Top border: 1px solid `#e9ecef`

**Buttons:**
- Cancel (secondary):
  * Background: Transparent
  * Color: Gray
  * Border: 1px solid `#dee2e6`
- Create Project (primary):
  * Background: Purple `#6c5ce7`
  * Color: White
  * Border: None
- Both:
  * Font size: 13px
  * Padding: 0.5rem 1rem
  * Border radius: 4px

## Interaction States

### Hover States
- Buttons: Light gray background `#f8f9fa`
- Primary button: Darker purple `#5f4dd1` with subtle transform
- Projects: Light gray background `#f8f9fa`
- Tabs: Light gray background `#f8f9fa`
- Messages: Slightly darker background (purple or gray)

### Active States
- Project: Purple background `#e7e8ff`, purple text `#6c5ce7`
- Tab: Purple text `#6c5ce7`, purple bottom border (2px), 500 font weight

### Focus States
- Form inputs: Purple border `#6c5ce7` with subtle shadow
- Textarea: Gray border `#adb5bd` with subtle shadow

### Disabled States
- Send button during processing: Disabled state (implementation needed)

## Theming

**Current Implementation:**
- Single light theme only
- Purple accent color throughout
- Flat design aesthetic

**Future Considerations:**
- Dark mode support
- Customizable accent colors
- High contrast mode
- User preference persistence

## Variants

**Button Variants:**
- Icon-only (primary pattern)
- Text + icon (not currently used)
- Primary (purple background)
- Secondary (transparent with border)

**Message Variants:**
- User message (purple background)
- Assistant message (gray background)
- Both share similar styling with different colors

**Input Variants:**
- Text input (single line)
- Textarea (multi-line, resizable)
- Select dropdown (model selector)

## Dependencies

- **Bootstrap 5.3.3**: CSS framework from CDN
- **Bootstrap Icons 1.11.3**: Icon library from CDN
- **Custom CSS**: Overrides and extensions in site.css
