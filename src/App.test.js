import { total } from "./App";

const add = jest.fn(() => 3);

test("Add Test", () => {
  expect(add(1, 2)).toBe(3);
  expect(add).toHaveBeenCalledTimes(1);
  expect(add).toHaveBeenCalledWith(1, 2);
});

// test("total", () => {
//   expect(total(10, 20)).toBe("$30");
// });
