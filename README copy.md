# Alternative AI Chat UI

A modern chat interface with an alternative layout design featuring:
- Top-positioned prompt input
- Project-based organization
- Multiple thread tabs per project
- Minimal, flat design aesthetic

## Development

### TypeScript Compilation

This project uses TypeScript. To compile the TypeScript code to JavaScript:

```bash
# Install TypeScript globally (if not already installed)
npm install -g typescript

# Compile TypeScript to JavaScript
tsc

# Or watch for changes and auto-compile
tsc --watch
```

The TypeScript file (`app.ts`) will be compiled to JavaScript (`app.js`) which is loaded by the HTML.

### Running the Application

Simply open `index.html` in a web browser, or use a local development server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

## Project Structure

- `index.html` - Main HTML structure
- `site.css` - All styling
- `app.ts` - TypeScript source code
- `app.js` - Compiled JavaScript (generated from app.ts)
- `tsconfig.json` - TypeScript configuration
- `spec/alt-chat-ui.spec.md` - Detailed UI specification

## Features

- **Project Management**: Create projects with title and description
- **Thread Tabs**: Multiple independent discussion threads per project
- **Modern UI**: Clean, minimal design with icon-only buttons
- **Responsive**: Compact spacing and balanced typography
- **Type-Safe**: Full TypeScript implementation

## Usage

1. Click "New Project" to create a project
2. Enter title and description
3. Start chatting in the default thread
4. Create additional threads using the "Add Tab" button
5. Switch between projects and threads to organize conversations
