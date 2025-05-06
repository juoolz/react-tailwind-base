# Components

This folder contains reusable React components used throughout the application.

## Purpose

Components in this directory should:
- **Be reusable**: Designed to be used in multiple places
- **Focus on rendering**: Primarily concerned with UI rather than business logic
- **Follow consistent patterns**: Adhere to project conventions for props, styling, etc.
- **Be well-documented**: Include clear prop definitions with TypeScript

## Organization

The components folder is organized into several subdirectories:

- **UI/**: Atomic UI components (buttons, inputs, cards, etc.)
- **Layout/**: Components related to page structure (not to be confused with the separate `/layouts` directory)
- **Forms/**: Form-related components (form fields, validations, etc.)
- **Data/**: Components for displaying data (tables, lists, etc.)
- **Feedback/**: User feedback components (alerts, toasts, loading indicators, etc.)
- **Navigation/**: Navigation-related components (menus, tabs, etc.)

## Component Types

There are several types of components you might find or create:

1. **UI Components**: Small, reusable building blocks (buttons, inputs, etc.)
2. **Composite Components**: Combinations of UI components (form groups, card lists, etc.)
3. **Feature Components**: Domain-specific components (user profile card, product item, etc.)
4. **Container Components**: Components that fetch and provide data to presentational components

## Component Structure

A typical component file should include:

```tsx
import React from 'react';
import { SomeUIComponent } from './UI/SomeUIComponent';

// Component props interface
export interface MyComponentProps {
  title: string;
  description?: string;
  onAction?: () => void;
}

// Component implementation
const MyComponent: React.FC<MyComponentProps> = ({
  title,
  description,
  onAction,
}) => {
  // Component logic
  
  return (
    <div className="my-component">
      <h2 className="text-xl font-bold">{title}</h2>
      {description && <p className="mt-2 text-gray-600">{description}</p>}
      
      <SomeUIComponent onClick={onAction} />
    </div>
  );
};

export default MyComponent;
```

## Best Practices

- Use TypeScript props interfaces for all components
- Break large components into smaller, more focused ones
- Use composition to build complex UIs
- Follow a consistent naming convention (PascalCase for components)
- Consider component variants and memoization for performance
- Write unit tests for components with complex logic
- Use Storybook or similar tools for component documentation (if applicable)
- Implement proper error handling and loading states 