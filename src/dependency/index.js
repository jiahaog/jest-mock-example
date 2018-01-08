// makeHttpCall is an example function which should not be called, and should be mocked out in
// our tests
export const makeHttpCall = () => {};

// split is a function to split a string into a array by a delimiter. For our example tests, this
// function will not be mocked
export const split = (inp, delimiter) => inp.split(delimiter);

export default makeHttpCall;
