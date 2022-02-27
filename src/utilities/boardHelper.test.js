import { runBoardRule, checkComplete } from './boardHelper';

test('Two facing up cards with same content should return two_cards_match state', () => {
  const obj = {
    0: {
      status: 'up',
      content: 0
    },
    1: {
      status: 'up',
      content: 0
    },
    2: {
      status: 'down',
      content: 1
    },
    3: {
      status: 'down',
      content: 1
    }
  }
  expect(runBoardRule(obj)).toEqual([['0','1'], 'two_cards_match']);
});


test('Two facing up cards with different content should return two_cards_not_match state', () => {
  const obj = {
    0: {
      status: 'up',
      content: 0
    },
    1: {
      status: 'down',
      content: 0
    },
    2: {
      status: 'up',
      content: 1
    },
    3: {
      status: 'down',
      content: 1
    }
  }
  expect(runBoardRule(obj)).toEqual([['0','2'], 'two_cards_not_match']);
});

test('One facing up card should return empty', () => {
  const obj = {
    0: {
      status: 'up',
      content: 0
    },
    1: {
      status: 'down',
      content: 0
    },
    2: {
      status: 'down',
      content: 1
    },
    3: {
      status: 'down',
      content: 1
    }
  }
  expect(runBoardRule(obj)).toEqual([[], '']);
})

test('All cards having match status should return complete true', () => {
  const obj = {
    0: {
      status: 'match',
      content: 0
    },
    1: {
      status: 'match',
      content: 0
    },
    2: {
      status: 'match',
      content: 1
    },
    3: {
      status: 'match',
      content: 1
    }
  }
  expect(checkComplete(obj)).toBe(true);
});

test('At least one card without match status should return complete false', () => {
  const obj = {
    0: {
      status: 'up',
      content: 0
    },
    1: {
      status: 'down',
      content: 0
    },
    2: {
      status: 'match',
      content: 1
    },
    3: {
      status: 'match',
      content: 1
    }
  }
  expect(checkComplete(obj)).toBe(false);
});

