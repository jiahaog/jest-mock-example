import addOneToHttpCall from './index';
import { makeHttpCall, split } from './../dependency';

jest.mock('./../dependency', () => ({
  makeHttpCall: jest.fn(),
  split: require.requireActual('./../dependency').split,
}));

test('only mock the value of makeHttpCall()', () => {
  makeHttpCall.mockReturnValueOnce(1);
  const result = addOneToHttpCall();
  expect(result).toEqual(2);
});

test('split() still works as intended', () => {
  const result = split('concatenated', 'a');
  expect(result).toEqual(['conc', 'ten', 'ted']);
});
