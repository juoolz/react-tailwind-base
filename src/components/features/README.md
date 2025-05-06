# Feature Components

This folder contains complex components that implement specific application features.

## Purpose

Feature components should:
- **Implement specific features**: Each component implements a cohesive piece of functionality
- **Manage their own state**: Handle state related to their specific feature
- **Compose UI components**: Use simpler UI components to build the feature interface
- **Encapsulate business logic**: Contain the logic related to the feature

## Characteristics

These components:
- Are larger and more complex than simple UI components
- Often manage their own state (though they may also connect to global state)
- May make API calls or use hooks for data fetching
- Typically represent a complete "feature" rather than just a UI element

## Examples

- TodoList (task management component)
- UserProfile (profile display and editing)
- ShoppingCart
- SearchWithFilters
- DataTable (with sorting, filtering, pagination)
- MediaGallery

## Implementation Guidelines

- Try to delegate UI rendering to simpler components when possible
- Keep business logic separate from rendering logic when it makes sense
- Consider breaking very large feature components into smaller subcomponents
- If a feature component grows too large, consider moving it to its own feature directory 