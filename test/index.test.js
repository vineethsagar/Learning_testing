import sum from "../src/index";

test("Testing the Sum function", () => {
  expect(sum(1, 2)).toBe(3);
});

test("Testing the Sum function", () => {
  expect(sum(-1, 2)).toBe(1);
});

test("Testing the Sum function", () => {
  expect(sum(1, -2)).toBe(-1);
});

test("Testing the Sum function", () => {
  expect(sum(-1, -2)).toBe(-3);
});
