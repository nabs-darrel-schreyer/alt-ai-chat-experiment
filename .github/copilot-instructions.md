# Copilot Instructions

Always follow the instructions in this file when generating code for the project. If there are multiple instructions, apply all of them in the order they appear in the file.

## Specification Files

The project specification is organized into separate files by responsibility to ensure each aspect receives explicit attention:

1. **spec/goals-and-scope.md** - Project goals, design principles, and scope
2. **spec/workflows.md** - User workflows (happy path, alternate, error, loading)
3. **spec/layout.md** - Component structure, wireframes, and component tree
4. **spec/styling.md** - Design tokens, color palette, typography, variants, theming, and interaction states
5. **spec/data-and-state.md** - Type definitions, state management, data contracts, validation, and event handling
6. **spec/acceptance-criteria.md** - Acceptance criteria organized by workflow

When working on the UI, consult the relevant spec file(s) for the task:
- **Layout changes**: Refer to layout.md and styling.md
- **Interaction behavior**: Refer to workflows.md and data-and-state.md
- **Visual styling**: Refer to styling.md
- **Data/state logic**: Refer to data-and-state.md
- **Testing/validation**: Refer to acceptance-criteria.md
- **Design decisions**: Refer to goals-and-scope.md

## Development Workflow

1. **Read relevant specification**: Before implementing any changes, consult the appropriate spec file(s) to understand requirements

2. **Layout UI definition**: Define the HTML structure and CSS styles for the chat interface layout. This includes the overall page layout, positioning of elements, and design considerations.
   - At this stage you don't need to consider responsive design

3. **Update specifications**: When making significant changes, update the relevant spec file(s) to keep documentation in sync with implementation

4. **Type safety**: Always run the TypeScript compiler to ensure that the code is type-safe and free of errors. This will help maintain code quality and prevent issues during development

5. **Browser testing**: Always test the application in a web browser to verify that the layout and functionality are working as expected. This includes checking for any visual issues, ensuring that interactive elements are functioning correctly, and confirming that the overall user experience is smooth
