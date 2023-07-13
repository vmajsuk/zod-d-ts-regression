### Zod .d.ts bundle size comparison

This repository showcases zod's regression in .d.ts file size

Initially the regression occured in `zod@3.21.1`, and after that it got worse in `zod@3.21.4`

The regression occurs when combining `.catchall` with `.passthrough`

Here is a table comparing index.d.ts sizes for different zod versions:

| Version | index.d.ts lines | source code                       | output .d.ts                           |
| ------- | ---------------- | --------------------------------- | -------------------------------------- |
| 3.21.0  | 116              | [index.ts](./3.21.0/src/index.ts) | [index.d.ts](./3.21.0/dist/index.d.ts) |
| 3.21.1  | 356              | [index.ts](./3.21.1/src/index.ts) | [index.d.ts](./3.21.1/dist/index.d.ts) |
| 3.21.4  | 1052             | [index.ts](./3.21.4/src/index.ts) | [index.d.ts](./3.21.4/dist/index.d.ts) |