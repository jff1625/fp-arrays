import { describe, expect, it } from "vitest";
import {
  head,
  tail,
  last,
  length,
  sum,
  includes,
  map,
  filter,
  reduce,
  reverse,
  dedupe,
  take,
  drop,
  nth,
  zip,
  flatten,
  flatMap,
  groupBy,
  cartTotal,
  tagCloud,
  pivot,
  leafNames,
} from "./fp-arrays";

// ─── 1. Primitives ───

describe("head", () => {
  it("returns first element", () => {
    expect(head([1, 2, 3])).toBe(1);
    expect(head(["a", "b"])).toBe("a");
  });
  it("returns undefined for empty", () => {
    expect(head([])).toBeUndefined();
  });
});

describe("tail", () => {
  it("returns everything after the first", () => {
    expect(tail([1, 2, 3])).toEqual([2, 3]);
    expect(tail(["a"])).toEqual([]);
  });
  it("returns empty for empty", () => {
    expect(tail([])).toEqual([]);
  });
});

describe("last", () => {
  it("returns last element", () => {
    expect(last([1, 2, 3])).toBe(3);
    expect(last(["x"])).toBe("x");
  });
  it("returns undefined for empty", () => {
    expect(last([])).toBeUndefined();
  });
});

// ─── 2. Building Blocks ───

describe("length", () => {
  it("counts elements recursively", () => {
    expect(length([])).toBe(0);
    expect(length([9])).toBe(1);
    expect(length([1, 2, 3, 4, 5])).toBe(5);
  });
});

describe("sum", () => {
  it("sums recursively", () => {
    expect(sum([])).toBe(0);
    expect(sum([7])).toBe(7);
    expect(sum([1, 2, 3, 4])).toBe(10);
    expect(sum([-1, 0.5, 2.5])).toBe(2);
  });
});

describe("includes", () => {
  it("finds present elements", () => {
    expect(includes([1, 2, 3], 2)).toBe(true);
    expect(includes(["a", "b"], "b")).toBe(true);
  });
  it("returns false for missing elements", () => {
    expect(includes([1, 2, 3], 9)).toBe(false);
    expect(includes([], 1)).toBe(false);
  });
  it("handles undefined as a value", () => {
    expect(includes([undefined, 1, 2], undefined)).toBe(true);
  });
});

// ─── 3. Transforms ───

describe("map", () => {
  it("transforms each element", () => {
    expect(map([1, 2, 3], (n) => n * 2)).toEqual([2, 4, 6]);
    expect(map(["hi", "yo"], (s) => s.toUpperCase())).toEqual(["HI", "YO"]);
  });
  it("handles empty", () => {
    expect(map([], (x) => x)).toEqual([]);
  });
});

describe("filter", () => {
  it("keeps matching elements", () => {
    expect(filter([1, 2, 3, 4], (n) => n % 2 === 0)).toEqual([2, 4]);
    expect(filter(["cat", "car", "dog"], (s) => s.startsWith("c"))).toEqual([
      "cat",
      "car",
    ]);
  });
  it("handles empty", () => {
    expect(filter([], () => true)).toEqual([]);
  });
});

describe("reduce", () => {
  it("folds left", () => {
    expect(reduce([1, 2, 3], (acc, n) => acc + n, 0)).toBe(6);
    expect(reduce(["a", "b", "c"], (acc, s) => acc + s, "")).toBe("abc");
  });
  it("handles empty (returns init)", () => {
    expect(reduce([], (acc, n) => acc + n, 42)).toBe(42);
  });
});

// ─── 4. Derived ───

describe("reverse", () => {
  it("reverses an array", () => {
    expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
    expect(reverse(["a"])).toEqual(["a"]);
    expect(reverse([])).toEqual([]);
  });
});

describe("dedupe", () => {
  it("removes consecutive duplicates", () => {
    expect(dedupe([1, 1, 2, 2, 3, 1, 1])).toEqual([1, 2, 3, 1]);
    expect(dedupe(["a", "a", "b"])).toEqual(["a", "b"]);
  });
  it("handles empty and single", () => {
    expect(dedupe([])).toEqual([]);
    expect(dedupe([5])).toEqual([5]);
  });
  it("handles triple", () => {
    expect(dedupe([1, 1, 1, 2])).toEqual([1, 2]);
  });
});

describe("take", () => {
  it("takes first n elements", () => {
    expect(take([1, 2, 3, 4], 2)).toEqual([1, 2]);
    expect(take([1, 2], 5)).toEqual([1, 2]);
    expect(take([], 3)).toEqual([]);
  });
  it("take 0 returns empty", () => {
    expect(take([1, 2, 3], 0)).toEqual([]);
  });
});

describe("drop", () => {
  it("drops first n elements", () => {
    expect(drop([1, 2, 3, 4], 2)).toEqual([3, 4]);
    expect(drop([1, 2], 5)).toEqual([]);
    expect(drop([], 3)).toEqual([]);
  });
  it("drop 0 returns all", () => {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });
});

describe("nth", () => {
  it("returns element at index", () => {
    expect(nth([10, 20, 30], 0)).toBe(10);
    expect(nth([10, 20, 30], 2)).toBe(30);
    expect(nth(["a", "b", "c"], 1)).toBe("b");
  });
  it("returns undefined for out of bounds", () => {
    expect(nth([1, 2], 2)).toBeUndefined();
    expect(nth([1, 2, 4], 1000000)).toBeUndefined();
    expect(nth([], 0)).toBeUndefined();
  });
});

// ─── 5. Composition ───

describe("zip", () => {
  it("pairs elements by index", () => {
    expect(zip([1, 2, 3], ["a", "b", "c"])).toEqual([
      [1, "a"],
      [2, "b"],
      [3, "c"],
    ]);
  });
  it("stops at shorter array", () => {
    expect(zip([1, 2], ["a", "b", "c"])).toEqual([
      [1, "a"],
      [2, "b"],
    ]);
    expect(zip([1, 2, 3], ["a"])).toEqual([[1, "a"]]);
  });
  it("handles empty", () => {
    expect(zip([], [1, 2])).toEqual([]);
    expect(zip([1], [])).toEqual([]);
  });
});

describe("flatten", () => {
  it("flattens one level", () => {
    expect(flatten([[1, 2], [3], [4, 5, 6]])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(flatten([["a"], ["b", "c"]])).toEqual(["a", "b", "c"]);
  });
  it("handles empty", () => {
    expect(flatten([])).toEqual([]);
    expect(flatten([[], []])).toEqual([]);
  });
});

describe("flatMap", () => {
  it("maps then flattens", () => {
    expect(flatMap([1, 2, 3], (n) => [n, n * 10])).toEqual([
      1, 10, 2, 20, 3, 30,
    ]);
    expect(flatMap(["hi"], (s) => s.split(""))).toEqual(["h", "i"]);
  });
  it("handles empty", () => {
    expect(flatMap([], (x) => [x])).toEqual([]);
  });
});

describe("groupBy", () => {
  it("groups by key function", () => {
    const words = ["one", "two", "three", "four", "five"];
    expect(groupBy(words, (w) => String(w.length))).toEqual({
      "3": ["one", "two"],
      "5": ["three"],
      "4": ["four", "five"],
    });
  });
  it("handles empty", () => {
    expect(groupBy([], () => "x")).toEqual({});
  });
});

// ─── 6. Real-World ───

describe("cartTotal", () => {
  it("sums price * qty for each item", () => {
    const cart = [
      { name: "Widget", price: 9.99, qty: 2 },
      { name: "Gadget", price: 24.99, qty: 1 },
      { name: "Doohickey", price: 4.5, qty: 4 },
    ];
    expect(cartTotal(cart)).toBeCloseTo(62.97);
  });
  it("handles empty cart", () => {
    expect(cartTotal([])).toBe(0);
  });
});

describe("tagCloud", () => {
  it("counts tag occurrences across posts", () => {
    const posts = [
      { title: "FP basics", tags: ["fp", "javascript"] },
      { title: "Recursion", tags: ["fp", "recursion"] },
      { title: "Arrays", tags: ["javascript", "arrays"] },
    ];
    expect(tagCloud(posts)).toEqual({
      fp: 2,
      javascript: 2,
      recursion: 1,
      arrays: 1,
    });
  });
  it("handles empty", () => {
    expect(tagCloud([])).toEqual({});
  });
});

describe("pivot", () => {
  it("groups by region and sums per product", () => {
    const rows = [
      { region: "West", product: "Widgets", amount: 100 },
      { region: "West", product: "Gadgets", amount: 50 },
      { region: "East", product: "Widgets", amount: 200 },
      { region: "West", product: "Widgets", amount: 75 },
      { region: "East", product: "Gadgets", amount: 30 },
    ];
    expect(pivot(rows)).toEqual({
      West: { Widgets: 175, Gadgets: 50 },
      East: { Widgets: 200, Gadgets: 30 },
    });
  });
  it("handles empty", () => {
    expect(pivot([])).toEqual({});
  });
});

describe("leafNames", () => {
  it("collects leaf names from a nested tree", () => {
    const tree = {
      name: "Electronics",
      children: [
        {
          name: "Computers",
          children: [
            { name: "Laptops", children: [] },
            { name: "Desktops", children: [] },
          ],
        },
        {
          name: "Phones",
          children: [
            { name: "Android", children: [] },
            { name: "iOS", children: [] },
          ],
        },
      ],
    };
    expect(leafNames(tree)).toEqual(["Laptops", "Desktops", "Android", "iOS"]);
  });
  it("returns name if root is a leaf", () => {
    expect(leafNames({ name: "Solo", children: [] })).toEqual(["Solo"]);
  });
  it("handles deep nesting", () => {
    const tree = {
      name: "A",
      children: [
        {
          name: "B",
          children: [
            {
              name: "C",
              children: [{ name: "D", children: [] }],
            },
          ],
        },
      ],
    };
    expect(leafNames(tree)).toEqual(["D"]);
  });
});
