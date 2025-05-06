# Contexts

This folder contains React Context providers for application-wide state management.

## Purpose

Context providers should:
- **Manage shared state**: Provide state that needs to be accessed by multiple components
- **Reduce prop drilling**: Make state available without passing props through many components
- **Encapsulate related state and logic**: Group related functionality
- **Provide hooks for consumers**: Offer custom hooks for using the context

## When to Use Context

Context is ideal for:
- Theme and styling preferences
- User authentication state
- Localization/translations
- Feature flags
- Application-wide notifications
- Shopping cart state
- Multi-step form state

## Example

```tsx
// ThemeContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create the context with a default value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for using this context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
```

## Usage in Components

```tsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemedButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded font-medium ${
        theme === 'dark' 
          ? 'bg-gray-800 text-white hover:bg-gray-700' 
          : 'bg-blue-500 text-white hover:bg-blue-600'
      }`}
    >
      Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};
```

## Setting Up Application Providers

Wrap your application with context providers in your main App component:

```tsx
// App.tsx
import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        {/* Rest of your application */}
      </ThemeProvider>
    </AuthProvider>
  );
};
```

## Best Practices

- Create a custom hook for each context to simplify usage
- Add error handling for when context is used outside its provider
- Keep related state together in a single context
- Consider performance optimizations (memoization, context splitting)
- Use TypeScript for better type safety
- Implement proper error boundaries
- Consider alternatives like Zustand or Redux for very complex state 