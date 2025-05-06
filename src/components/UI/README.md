# UI Components

This folder contains reusable, atomic UI components that are used throughout the application.

## Purpose

UI components should be:
- **Reusable**: Components should be designed for reuse across multiple pages/features
- **Self-contained**: Minimal external dependencies
- **Presentational**: Focused on rendering UI elements rather than handling business logic
- **Composable**: Can be combined to create more complex components

## Examples

Examples of components that belong in this folder:
- Buttons
- Form inputs (TextFields, Checkboxes, etc.)
- Cards
- Modals/Dialogs
- Alerts/Notifications
- Navigation elements (Tabs, Breadcrumbs)
- Data display elements (Tables, Lists)

## Implementation Guidelines

- Use both MUI components and Tailwind CSS for styling
- Keep components simple and focused on a single responsibility
- Include proper TypeScript interfaces/types
- Consider accessibility (ARIA attributes, keyboard navigation)
- Document props with JSDoc comments

## Example Component Structure

```tsx
import React from 'react';
import { SomeMuiComponent } from '@mui/material';

export interface MyComponentProps {
  // Props definition
}

const MyComponent: React.FC<MyComponentProps> = ({ /* props */ }) => {
  // Component implementation with Tailwind classes
  return (
    <SomeMuiComponent className="tailwind-classes">
      {/* Content */}
    </SomeMuiComponent>
  );
};

export default MyComponent;
``` 