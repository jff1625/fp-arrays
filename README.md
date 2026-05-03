# FP Arrays in Typescript

A recursive array workout for your AI-addled brain. Inspired by [syntax-cardio](https://github.com/wesbos/syntax-cardio).

Switch off autocomplete. Switch off AI chat too if you're feeling brave.

## Rules

- No `for`/`while` loops. No `.forEach()` or other `Array.prototype` methods.
  - Exception: `tail` can use one array method to bootstrap itself. It's technically possible without, but we're here to have fun, and this is just a primitive.
- Use `head`, `tail`, and recursion.
- Early exercises become helpers for later ones — reuse them!

## Running Tests

```bash
npm run test:watch
# or, if you prefer
bun test --watch
```

## Sections (do them in order!)

1. **Primitives** — `head`, `tail`, `last`. Given or near-given; the rest builds on these.
2. **Building Blocks** — `length`, `sum`, `includes`. Recursive, using head/tail.
3. **Transforms** — `map`, `filter`, `reduce`. The big three, built from scratch.
4. **Derived** — `reverse`, `dedupe`, `take`, `drop`, `nth`. Combine what you've built.
5. **Composition** — `zip`, `flatten`, `flatMap`, `groupBy`. Things get interesting.
6. **Real-World** — `cartTotal`, `tagCloud`, `pivot`, `leafNames`. Put your toolkit to work.
