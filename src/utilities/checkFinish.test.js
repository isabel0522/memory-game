import checkFinish from "../utilities/checkFinish";

test('All cards having match status should return true', () => {
  const obj = {
    0: {
      status: 'match',
      content: 0
    },
    1: {
      status: 'match',
      content: 0
    }
  }
  expect(checkFinish(obj)).toBe(true);
});

test('Not all cards having match status should return false', () => {
  const obj = {
    0: {
      status: 'match',
      content: 0
    },
    1: {
      status: 'down',
      content: 0
    }
  }
  expect(checkFinish(obj)).toBe(false);
});