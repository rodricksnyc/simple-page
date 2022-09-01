import { getUserTest } from './api';

describe('68771600', () => {
  test('should pass', () => {
    const testData = {   streetAddress: '645 Road', name: 'Joe Smith' };

    const response = { json: jest.fn().mockResolvedValueOnce(testData) };
    global.fetch = jest.fn().mockResolvedValueOnce(response);

    return getUserTest().then((data) => {
      expect(data).toEqual(testData);
    });
  });
});
