// ═══════════════════════════════════════════════════════════════════
// FP Arrays — Recursive Array Workout
//
// Rules:
//   • No for/while loops. No .forEach() or other ES Array.method()'s.
//   • Use head, tail, and recursion.
//   • Early exercises become helpers for later ones — reuse them!
// ═══════════════════════════════════════════════════════════════════

// ─── 1. Primitives ───

/** First element of an array, or undefined if empty. */
export function head<T>(arr: T[]): T | undefined {
  return null as any;
}

/** Everything except the first element. Empty array if length <= 1. */
export function tail<T>(arr: T[]): T[] {
  return null as any;
}

/** Last element of an array, or undefined if empty. */
export function last<T>(arr: T[]): T | undefined {
  return null as any;
}

// ─── 2. Building Blocks (recursive, use head/tail) ───

/** Length of an array — don't just return arr.length tho, that's cheating! */
export function length<T>(arr: T[]): number {
  return null as any;
}

/** Sum numbers recursively. */
export function sum(nums: number[]): number {
  return null as any;
}

/** Does the array contain `target`? (strict equality) */
export function includes<T>(arr: T[], target: T): boolean {
  return null as any;
}

// ─── 3. Transforms ───

/** Recursive map — apply `fn` to each element. */
export function map<T, U>(arr: T[], fn: (item: T) => U): U[] {
  return null as any;
}

/** Recursive filter — keep elements where `pred` returns true. */
export function filter<T>(arr: T[], pred: (item: T) => boolean): T[] {
  return null as any;
}

/** Recursive reduce (left fold). */
export function reduce<T, U>(arr: T[], fn: (acc: U, item: T) => U, init: U): U {
  return null as any;
}

// ─── 4. Derived (use your earlier functions) ───

/** Reverse an array recursively. */
export function reverse<T>(arr: T[]): T[] {
  return null as any;
}

/** Remove consecutive duplicates. */
export function dedupe<T>(arr: T[]): T[] {
  return null as any;
}

/** Take the first `n` elements. */
export function take<T>(arr: T[], n: number): T[] {
  return null as any;
}

/** Drop the first `n` elements. */
export function drop<T>(arr: T[], n: number): T[] {
  return null as any;
}

/** Find the element at the given (zero based) index. */
export function nth<T>(arr: T[], n: number): T | undefined {
  return null as any;
}

// ─── 5. Composition ───

/** Zip two arrays into pairs. Stop at the shorter array's length. */
export function zip<A, B>(a: A[], b: B[]): [A, B][] {
  return null as any;
}

/** Flatten one level: [[1,2],[3]] → [1,2,3]. */
export function flatten<T>(arr: T[][]): T[] {
  return null as any;
}

/** Map each element to an array, then combine all results into one. */
export function flatMap<T, U>(arr: T[], fn: (item: T) => U[]): U[] {
  return null as any;
}

/** Group elements by a key function. */
export function groupBy<T>(
  arr: T[],
  keyFn: (item: T) => string,
): Record<string, T[]> {
  return null as any;
}

// ─── 6. Real-World (use your toolkit from above) ───

export type CartItem = { name: string; price: number; qty: number };

/** Compute the total cost of a shopping cart, preferably using recursion. */
export function cartTotal(items: CartItem[]): number {
  return null as any;
}

export type Post = { title: string; tags: string[] };

/** Count how many times each tag appears across all posts. */
export function tagCloud(posts: Post[]): Record<string, number> {
  return null as any;
}

export type SaleRow = { region: string; product: string; amount: number };

/** Summarize total sales per product, broken down by region. */
export function pivot(rows: SaleRow[]): Record<string, Record<string, number>> {
  return null as any;
}

export type Category = { name: string; children: Category[] };

/** Collect the names of all leaf categories (those with no children). */
export function leafNames(tree: Category): string[] {
  return null as any;
}
