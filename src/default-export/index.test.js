import addOneToHttpCall from './index';
import makeHttpCall from './../dependency';

jest.mock('./../dependency');

test('mock is called', () => {
  addOneToHttpCall();
  expect(makeHttpCall).toHaveBeenCalledTimes(1);
});
