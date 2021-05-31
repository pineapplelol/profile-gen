const util = require('../src/util');

test('starting p tag', () => {
  const result = '<p>';
  expect(util.genSingleTag('p')).toBe(result);
});

test('ending p tag', () => {
  const result = '</p>';
  expect(util.genSingleTag('/p')).toBe(result);
});

test('starting p tag with one attribute', () => {
  const attributes = { class: 'subtitle' };
  const result = '<p class="subtitle">';
  expect(util.genSingleTag('p', attributes)).toBe(result);
});

test('starting p tag with two attributes', () => {
  const attributes = { class: 'subtitle', hello: 'test' };
  const result = '<p class="subtitle" hello="test">';
  expect(util.genSingleTag('p', attributes)).toBe(result);
});
