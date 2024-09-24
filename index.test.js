// DO NOT CHANGE ANYTHING IN THIS FILE.

const prompCreator = require('prompt-sync');

jest.mock(
  'prompt-sync',
  () => {
    const mPrompt = jest.fn();
    return jest.fn(() => mPrompt);
  },
  { virtual: true }
);

describe('Test 1', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('when str="1,2,3"', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('1,2,3');
    jest.isolateModules(() => {
      const { result } = require('./');
      expect(result).toEqual([1, 4, 9]);
    });
  });
  test('when str="4"', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('4');
    jest.isolateModules(() => {
      const { result } = require('./');
      expect(result).toEqual([16]);
    });
  });
  test('when str="11,13,15"', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('11,13,15');
    jest.isolateModules(() => {
      const { result } = require('./');
      expect(result).toEqual([121, 169, 225]);
    });
  });
  test('when str="4,5,6,7,8,9"', () => {
    const mPrompt = prompCreator();
    mPrompt.mockReturnValueOnce('4,5,6,7,8,9');
    jest.isolateModules(() => {
      const { result } = require('./');
      expect(result).toEqual([16, 25, 36, 49, 64, 81]);
    });
  });
});
