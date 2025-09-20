When writing CSS with TailwindCSS
- Do not use the 'group' utility with @apply directive
- Always add the 'group' class directly to the HTML/JSX className attribute
- Example:
  - ❌ Incorrect: `@apply relative overflow-hidden rounded-lg cursor-pointer group;`
  - ✅ Correct: `@apply relative overflow-hidden rounded-lg cursor-pointer;` and add `group` to className