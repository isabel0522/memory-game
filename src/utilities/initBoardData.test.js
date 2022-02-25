import initBoardData from "../utilities/initBoardData";

test('Init board should return an object', () => {
  expect(typeof initBoardData()).toBe('object');
});

test('Init board should default to 24 cards', () => {
  expect(Object.keys(initBoardData()).length).toBe(24);
});

test('Init board can generate any number of even cards', () => {
  expect(Object.keys(initBoardData(12)).length).toBe(12);
  expect(() => {initBoardData(11)}).toThrow();
});

test('Init board should return cards with status and content properties', () => {
  const results = initBoardData();
  expect(Object.keys(results).every(key=>results[key].hasOwnProperty('status') && results[key].hasOwnProperty('content'))).toBe(true);
});

test('Every card is face down at begining', () => {
  const results = initBoardData();
  expect(Object.keys(results).every(key=>results[key].status === 'down')).toBe(true);
})

test('Every card should have only one duplicated card to match', () => {
  const results = initBoardData();
  expect(Object.keys(results).filter(key=>results[key].content === 5).length).toBe(2);
  expect(Object.keys(results).filter(key=>results[key].content === 8).length).toBe(2);
});