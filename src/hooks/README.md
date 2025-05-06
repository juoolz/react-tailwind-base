# Custom Hooks

This folder contains reusable React hooks that encapsulate complex logic and stateful behavior.

## Purpose

Custom hooks should:
- **Extract reusable logic**: Move complex logic out of components
- **Encapsulate related state**: Group related state and effects
- **Follow the use* naming convention**: All hook names should start with "use"
- **Be composable**: Hooks can use other hooks
- **Handle side effects**: API calls, subscriptions, DOM manipulations

## Common Hook Types

- **Data fetching hooks**: `useFetch`, `useQuery`, `useResource`
- **Form hooks**: `useForm`, `useInput`, `useValidation`
- **UI hooks**: `useModal`, `useToast`, `useMediaQuery`
- **Utility hooks**: `useDebounce`, `useLocalStorage`, `useClickOutside`
- **Business logic hooks**: Domain-specific hooks for your application

## Example

```tsx
import { useState, useEffect } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

function useFetch<T>(url: string, options?: RequestInit): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState(prevState => ({ ...prevState, loading: true }));
        const response = await fetch(url, options);
        
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        
        const data = await response.json();
        setState({ data, loading: false, error: null });
      } catch (error) {
        setState({ data: null, loading: false, error: error as Error });
      }
    };

    fetchData();
    
    // Cleanup function
    return () => {
      // Cancel any pending requests if needed
    };
  }, [url, JSON.stringify(options)]);

  return state;
}

export default useFetch;
```

## Usage in Components

```tsx
import useFetch from '../hooks/useFetch';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserProfile: React.FC = () => {
  const { data: user, loading, error } = useFetch<User>('/api/users/1');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user) return <div>No user data</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};
```

## Best Practices

- Keep hooks focused on a single responsibility
- Use TypeScript for better type safety
- Document parameters and return values
- Handle cleanup in useEffect for subscriptions
- Consider optimizations like useCallback and useMemo
- Write tests for complex hooks 