import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    const singleValueArray = [6];
    const resultList = generateLinkedList(singleValueArray);

    expect(resultList).toStrictEqual({
      value: 6,
      next: {
        value: null,
        next: null,
      },
    });
  });

  test('should generate linked list from values 2', () => {
    const multipleValueArray = [9, 8];
    const resultList = generateLinkedList(multipleValueArray);

    expect(resultList).toMatchSnapshot();
  });
});
