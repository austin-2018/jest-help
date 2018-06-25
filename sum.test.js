const functions = require('./sum');

test('sum of 1 and 2 equals 3', () => {
    expect(functions.sum(1, 2)).toBe(3);
})