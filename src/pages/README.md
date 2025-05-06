# Pages

This folder contains page components that represent different routes in the application.

## Purpose

Page components should:
- **Represent routes**: Each component typically corresponds to a specific URL route
- **Compose other components**: Pages combine layouts, UI components, and feature components
- **Handle page-level state**: Manage state that's specific to the page
- **Fetch data**: Make API calls relevant to the page (often via hooks)
- **Define layout**: Determine how content is arranged on the page

## Organization

Pages can be organized in several ways:
- **Flat structure**: For smaller applications
- **Nested by feature/section**: For larger applications (e.g., `/pages/dashboard/`, `/pages/auth/`)
- **Nested by route structure**: Mirroring the URL paths (e.g., `/pages/users/[id]/profile.tsx`)

## Example

```tsx
import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import UserCard from '../components/users/UserCard';
import { fetchUsers } from '../utils/api';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  return (
    <MainLayout>
      <div className="container mx-auto py-6">
        <h1 className="text-3xl font-bold mb-6">Users</h1>
        
        {loading ? (
          <p>Loading users...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map(user => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default UsersPage;
```

## Best Practices

- Keep page components focused on composition and layout
- Move complex logic to custom hooks
- Use layouts for consistent page structure
- Handle loading and error states
- Consider code-splitting for large pages to improve performance 