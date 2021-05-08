import arrayClone from "../src/arrayClone";

test("Testing the cloning of array", () => {
  const array = [1, 2, 3];
  expect(arrayClone(array)).toEqual(array);
  expect(arrayClone(array)).not.toBe(array);
});
