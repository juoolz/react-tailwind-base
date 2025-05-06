# Utils

This folder contains utility functions and helper methods that are used throughout the application.

## Purpose

Utility functions should:
- **Be pure functions**: Produce the same output given the same input
- **Focus on a single task**: Each utility should do one thing well
- **Be stateless**: Avoid maintaining state or side effects
- **Be reusable**: Designed to be used in multiple components
- **Be well-tested**: Since they're used widely, ensure they work correctly

## Common Utility Categories

- **Formatting**: Date, number, currency formatting
- **Validation**: Form validation, data validation
- **API Helpers**: Request/response handling, error parsing
- **Data Transformation**: Mapping, filtering, sorting
- **Browser/DOM Utilities**: Local storage, cookies, media queries
- **Math/Calculations**: Complex calculations, conversions
- **Security**: Encryption, sanitization

## Example

```tsx
// dateUtils.ts

/**
 * Formats a date according to the specified format
 * @param date - The date to format
 * @param format - The format string (default: 'MM/DD/YYYY')
 * @returns The formatted date string
 */
export function formatDate(date: Date | string | number, format: string = 'MM/DD/YYYY'): string {
  const d = new Date(date);
  
  // Return 'Invalid Date' if the date is invalid
  if (isNaN(d.getTime())) {
    return 'Invalid Date';
  }
  
  const day = d.getDate().toString().padStart(2, '0');
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const year = d.getFullYear();
  
  let result = format;
  result = result.replace('DD', day);
  result = result.replace('MM', month);
  result = result.replace('YYYY', year.toString());
  
  return result;
}

/**
 * Returns a relative time string (e.g., "2 hours ago")
 * @param date - The date to compare with the current time
 * @returns The relative time string
 */
export function getRelativeTimeString(date: Date | string | number): string {
  const d = new Date(date);
  const now = new Date();
  
  // Return 'Invalid Date' if the date is invalid
  if (isNaN(d.getTime())) {
    return 'Invalid Date';
  }
  
  const diffMs = now.getTime() - d.getTime();
  const diffSec = Math.round(diffMs / 1000);
  const diffMin = Math.round(diffSec / 60);
  const diffHour = Math.round(diffMin / 60);
  const diffDay = Math.round(diffHour / 24);
  
  if (diffSec < 60) {
    return `${diffSec} second${diffSec !== 1 ? 's' : ''} ago`;
  } else if (diffMin < 60) {
    return `${diffMin} minute${diffMin !== 1 ? 's' : ''} ago`;
  } else if (diffHour < 24) {
    return `${diffHour} hour${diffHour !== 1 ? 's' : ''} ago`;
  } else if (diffDay < 30) {
    return `${diffDay} day${diffDay !== 1 ? 's' : ''} ago`;
  } else {
    return formatDate(d);
  }
}
```

## Usage in Components

```tsx
import React from 'react';
import { formatDate, getRelativeTimeString } from '../utils/dateUtils';

const ArticleCard: React.FC<{ publishDate: string }> = ({ publishDate }) => {
  return (
    <div className="article-card">
      <p className="text-sm text-gray-500">
        Published: {formatDate(publishDate, 'MM/DD/YYYY')}
        <span className="ml-2">({getRelativeTimeString(publishDate)})</span>
      </p>
      {/* Rest of the component */}
    </div>
  );
};
```

## Best Practices

- Use TypeScript for better type safety
- Add JSDoc comments to document parameters and return values
- Group related utilities in separate files
- Export individual functions rather than default exports
- Write comprehensive unit tests for utilities
- Avoid side effects in utility functions
- Consider performance for functions used in render loops 