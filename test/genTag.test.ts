const util = require('../src/util');

test('p tag with text', () => {
  const result = '<p>This is a tag</p>';
  expect(util.genTag('p', 'This is a tag')).toBe(result);
});

test('em tag with text', () => {
  const result = '<em>This is a tag</em>';
  expect(util.genTag('em', 'This is a tag')).toBe(result);
});

test('p tag with text and one attribute', () => {
  const attributes = { class: 'subtitle' };
  const result = '<p class="subtitle">This is a tag</p>';
  expect(util.genTag('p', 'This is a tag', attributes)).toBe(result);
});

test('p tag with text and two attributes', () => {
  const attributes = { class: 'subtitle', hello: 'test' };
  const result = '<p class="subtitle" hello="test">This is a tag</p>';
  expect(util.genTag('p', 'This is a tag', attributes)).toBe(result);
});
