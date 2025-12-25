# Asurax Studio

Professional Indie Game Studio Website.

## Project Setup

This project is built with Vite, React, and TypeScript.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1.  **Install Dependencies**
    The project relies on external packages like React and Lenis. You must install them before running the project.

    Run the included batch file:
    `install_dependencies.bat`

    Or manually run:
    ```bash
    npm install
    ```

    **Troubleshooting:**
    - If you see "npm is not recognized", you need to install [Node.js](https://nodejs.org/).
    - Restart your computer after installing Node.js to update your system paths.
    - If you already have Node.js installed but still see errors, try running the `install_dependencies.bat` file as Administrator.

### Running the Project

To start the development server:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```

## Structure

- `src/components/ui` - Reusable UI components (Button, Card)
- `src/pages` - Page components (Home, About, Projects, etc.)
- `src/styles` - Global and shared CSS files
