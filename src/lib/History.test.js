import History from './History';

test('History capacity', () => {
  const capacity = 3;
  const history = new History(capacity);
  for (let i = 0; i < capacity; i++) {
    history.push(i);
  }
  expect(history.length).toBe(capacity);
  history.push(capacity + 1);
  expect(history.length).toBe(capacity);
});
