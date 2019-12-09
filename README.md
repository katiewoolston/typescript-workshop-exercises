# Introduction to TypeScript

## Getting Started
Run:
```
npm install -g typescript@latest
npm install
```

Then run the first exercise:
```npm run variableTypes```

Once you've completed the first file, replace the filename with the next test file and keep going.

## Linting
TypeScript works best in conjunction with linting. If you haven't used it before, linting is like the green underline in a Word document - it isn't a typo (won't break your code), but there's an issue nonetheless and it's a good idea to fix it.

To run the linter in this project:
```npm run lint```

Some of the things the linter picks up (that the TypeScript compiler doesn't) include:
- Missing return type on a function
- Explicit 'any' type used (instead of using 'any', try [union types](./scripts/4_unionTypes.ts).)
