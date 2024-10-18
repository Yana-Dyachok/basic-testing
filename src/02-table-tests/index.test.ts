import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 5, b: 3, action: Action.Subtract, expected: 2 },
  { a: 2, b: 5, action: Action.Subtract, expected: -3 },
  { a: 0, b: 0, action: Action.Subtract, expected: 0 },
  { a: 3, b: 4, action: Action.Multiply, expected: 12 },
  { a: 0, b: 5, action: Action.Multiply, expected: 0 },
  { a: -2, b: -2, action: Action.Multiply, expected: 4 },
  { a: 10, b: 2, action: Action.Divide, expected: 5 },
  { a: 5, b: 0, action: Action.Divide, expected: Infinity },
  { a: 0, b: 5, action: Action.Divide, expected: 0 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 5, b: 0, action: Action.Exponentiate, expected: 1 },
  { a: 0, b: 5, action: Action.Exponentiate, expected: 0 },
  { a: 1, b: 7, action: 'Action.Add', expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)('using test cases', ({ a, b, action, expected }) => {
    const result = simpleCalculator({ a, b, action });
    expect(result).toBe(expected);
  });
});
