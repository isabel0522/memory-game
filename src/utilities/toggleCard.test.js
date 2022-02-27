import toggleCard from "./toggleCard";

test('Toggle a facing down card should return up', () => {
  expect(toggleCard('down')).toBe('up');
});

test('Toggle a facing up card should return down', () => {
  expect(toggleCard('up')).toBe('down');
});

test('Toggle a matching card should still return match', () => {
  expect(toggleCard('match')).toBe('match');
});
