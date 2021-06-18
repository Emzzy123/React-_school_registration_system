const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
//Unit testing
const add = jest.fn((x, y) => x + y);
test("add", () => {
  expect(add(1, 2)).toBe(3);
  expect(add).toHaveBeenCalledTimes(1);
  expect(add).toHaveBeenCalledWith(1, 2);
});

//Integration testing
// const total = require("./sum");
// test("total", () => {
//   expect(total(5, 20)).toBe('$25');
// });
