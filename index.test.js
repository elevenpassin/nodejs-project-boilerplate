const add = require('./index')

test('works as expected', () => {
  expect(add(1, 2)).toEqual(3)
  expect(add(-1, 0)).toEqual(-1)
  expect(add(-2, 3)).toEqual(1)
  expect(add(0, -0)).toEqual(0)
})