# React + Tailwind + MUI Base Project

A modern React application boilerplate featuring Tailwind CSS v4 and Material UI v7 integration.

## 🚀 Tech Stack

- **React 19** - The latest version of React with improved performance and features
- **Tailwind CSS 4** - Utility-first CSS framework with the newest v4 features
- **Material UI 7** - Google's Material Design implementation for React
- **TypeScript** - Type safety for better developer experience
- **Vite** - Next-generation frontend tooling for fast development and builds

## 📋 Features

- Modern UI components with Material UI integration
- Responsive design out of the box with Tailwind CSS
- Sample Todo component showing MUI + Tailwind integration
- TypeScript for type safety
- Hot module replacement for quick development
- Well-organized folder structure for scalable applications

## 🛠️ Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-tailwind-base
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── assets/          # Project assets (images, etc.)
│   ├── components/      # Reusable UI components
│   │   ├── UI/          # Atomic UI components
│   │   └── Todo.tsx     # Example Todo component with MUI + Tailwind
│   ├── contexts/        # React context providers
│   ├── hooks/           # Custom React hooks
│   ├── layouts/         # Page layout templates
│   ├── pages/           # Route components
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main application component
│   ├── index.css        # Global CSS including Tailwind imports
│   └── main.tsx         # Application entry point
├── index.html           # HTML template
├── postcss.config.js    # PostCSS configuration for Tailwind
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Project dependencies and scripts
```

Each directory contains a README.md file that explains:
- The purpose of the folder
- What types of files should be placed there
- Examples and best practices
- Usage guidelines

## 📝 Usage

### Using Tailwind with MUI

This project demonstrates how to use Tailwind CSS alongside Material UI components. You can use Tailwind's utility classes for layout and styling while leveraging MUI's advanced components.

Example from the Todo component:

```tsx
<div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
  <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Todo App</h1>
  
  <div className="flex mb-4">
    <TextField
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Add a new task"
      fullWidth
      size="small"
      className="mr-2"
    />
    <Button 
      variant="contained" 
      onClick={addTodo}
      className="bg-blue-500 hover:bg-blue-600"
    >
      Add
    </Button>
  </div>
  {/* ... */}
</div>
```

### Building for Production

To build the project for production, run:

```bash
npm run build
```

The output will be placed in the `dist` directory.

## 🧩 Adding New Components

To add new components:

1. Create a new file in the appropriate subdirectory of `src/components`
2. Import necessary MUI components and use Tailwind classes for styling
3. Export and use your component in the relevant page or layout

## 🔍 Application Organization

This project follows a organized structure for scalable React applications:

- **Components**: Reusable UI elements, organized by type and function
- **Pages**: Route components that represent different views of the application
- **Layouts**: Templates that provide consistent page structure
- **Hooks**: Custom React hooks for reusable logic
- **Contexts**: React context providers for state management
- **Utils**: Utility functions for common operations
- **Types**: TypeScript type definitions for better type safety

## 📄 License

[MIT](LICENSE)

## 🙏 Acknowledgements

- [Tailwind CSS](https://tailwindcss.com/)
- [Material UI](https://mui.com/)
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
