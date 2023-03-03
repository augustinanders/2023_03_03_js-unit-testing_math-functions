import { add, divide, multiply, subtract } from ".";

// add tests

test("returns 5 if called with add(2, 3)", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("returns a negative value if the greater argument is negative", () => {
  const result = add(2, -3);
  expect(result).toBeLessThan(0);
});

test("returns a value vlose to 0.3 if called with add(0.1, 0.2)", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

// subtract tests

test("returns 10 of called with subtract(15, 5)", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("returns a negative value if the second argument is grater than the first one", () => {
  const result = subtract(1, 2);
  expect(result).toBeLessThan(0);
});

// multiply tests

test("returns 8 if called with multiply(2,4)", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("returns a negative value if only the first argument is negetive", () => {
  const result = multiply(-1, 5);
  expect(result).toBeLessThan(0);
});

test("returns a negative value if only the first argument is negative", () => {
  const result = multiply(1, -1);
  expect(result).toBeLessThan(0);
});

test("returns a positive value if called with two negative arguments", () => {
  const result = multiply(-1, -1);
  expect(result).toBeGreaterThan(0);
});

// divide tests

test("returns 3 if valled with divide(9, 3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("returns 'You should not do this!' if called with 0 as second argument", () => {
  const result = divide(0, 0);
  expect(result).toBe("You should not do this!");
});
