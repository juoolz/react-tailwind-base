# Types

This folder contains TypeScript type definitions, interfaces, and type utilities used throughout the application.

## Purpose

TypeScript types should:
- **Provide type safety**: Define shapes of data and function signatures
- **Improve developer experience**: Enable editor autocomplete and documentation
- **Prevent runtime errors**: Catch type-related errors during compilation
- **Document API contracts**: Clearly define how components and functions should be used
- **Support scalability**: Make it easier to refactor and maintain the codebase

## Common Type Categories

- **Domain Models**: Core business data structures
- **API Responses**: Types for API results and payloads
- **Component Props**: Interface definitions for React components
- **State Types**: Types for application and component state
- **Enums**: Typed constants and options
- **Utility Types**: Type transformations and helpers

## Example

```tsx
// userTypes.ts

// Domain model
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

// Enum for user roles
export enum UserRole {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  Viewer = 'VIEWER',
}

// API response type
export interface UserApiResponse {
  data: User;
  status: number;
  message: string;
}

// Props interface for a component
export interface UserCardProps {
  user: User;
  isSelected?: boolean;
  onSelect?: (userId: string) => void;
  onEdit?: (user: User) => void;
}

// Partial type for updates
export type UserUpdatePayload = Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>;

// Union type for user status in the UI
export type UserStatus = 'active' | 'inactive' | 'pending' | 'blocked';
```

## Usage in Components

```tsx
import React from 'react';
import { User, UserCardProps, UserRole } from '../types/userTypes';

const UserCard: React.FC<UserCardProps> = ({ 
  user, 
  isSelected = false, 
  onSelect, 
  onEdit 
}) => {
  const isAdmin = user.role === UserRole.Admin;
  
  return (
    <div className={`p-4 border rounded ${isSelected ? 'bg-blue-50 border-blue-300' : 'bg-white'}`}>
      <h3 className="font-bold">{user.firstName} {user.lastName}</h3>
      <p className="text-gray-600">{user.email}</p>
      
      <div className="mt-2 flex space-x-2">
        {onSelect && (
          <button 
            onClick={() => onSelect(user.id)}
            className="px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded"
          >
            Select
          </button>
        )}
        
        {onEdit && isAdmin && (
          <button 
            onClick={() => onEdit(user)}
            className="px-2 py-1 text-sm bg-blue-100 hover:bg-blue-200 rounded text-blue-800"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};
```

## Best Practices

- Group related types in domain-specific files
- Export individual types rather than default exports
- Use descriptive names that indicate the purpose
- Leverage TypeScript's utility types (Partial, Omit, Pick, etc.)
- Keep types DRY (Don't Repeat Yourself)
- Document complex types with JSDoc comments
- Keep types in sync with your API contracts
- Consider generating types from API schemas when possible 