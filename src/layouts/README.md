# Layouts

This folder contains layout components that provide consistent page structure across the application.

## Purpose

Layout components should:
- **Provide consistent structure**: Define the overall page layout (header, footer, sidebar, etc.)
- **Be reusable**: Can be applied to multiple pages
- **Handle navigation**: Often include navigation elements
- **Manage layout-specific state**: Like sidebar collapsed/expanded state
- **Pass children through**: Layouts render content provided by page components

## Common Layout Types

- **MainLayout**: Primary application layout with header, footer, and navigation
- **AuthLayout**: Simplified layout for authentication pages (login, register)
- **DashboardLayout**: Layout with sidebar navigation for dashboard/admin areas
- **MinimalLayout**: Stripped-down layout for focused tasks or landing pages
- **PrintLayout**: Specialized layout for printable views

## Example

```tsx
import React, { ReactNode } from 'react';
import Header from '../components/UI/Header';
import Sidebar from '../components/UI/Sidebar';
import Footer from '../components/UI/Footer';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar className="w-64 shrink-0 hidden md:block" />
        
        <main className="flex-1 p-4 md:p-6">
          {/* Content from page components is rendered here */}
          {children}
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default DashboardLayout;
```

## Usage in Pages

```tsx
import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';

const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {/* Page content goes here */}
    </DashboardLayout>
  );
};

export default DashboardPage;
```

## Best Practices

- Keep layouts focused on structure and positioning
- Use Tailwind's responsive utilities for adaptive layouts
- Consider accessibility in your layout design
- Use React context for layout-specific state when needed
- Implement transitions for dynamic layout changes 