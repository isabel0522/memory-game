import toggleCard from '../../utilities/toggleCard';
import initBoardData from './../../utilities/initBoardData';

const initState = initBoardData();
/*
board state will be like:
{
  0: {status: 'down', content: 3},
  1: {status: 'down', content: 7},
  2: {status: 'down', content: 0},
  3: {status: 'down', content: 0},
  4: {status: 'down', content: 4},
  5: {status: 'down', content: 2},
  6: {status: 'down', content: 1},
  7: {status: 'down', content: 11},
  8: {status: 'down', content: 11},
  9: {status: 'down', content: 1},
  10: {status: 'down', content: 10},
  11: {status: 'down', content: 4},
  12: {status: 'down', content: 9},
  13: {status: 'down', content: 8},
  14: {status: 'down', content: 5},
  15: {status: 'down', content: 5},
  16: {status: 'down', content: 3},
  17: {status: 'down', content: 10},
  18: {status: 'down', content: 7},
  19: {status: 'down', content: 6},
  20: {status: 'down', content: 6},
  21: {status: 'down', content: 8},
  22: {status: 'down', content: 2},
  23: {status: 'down', content: 9}
}
*/

const boardReducer = (state=initState, action) => {
  switch (action.type) {
    case 'INIT_BOARD':
      return initBoardData();
    case 'TOGGLE_CARD':
      return {
        ...state,
        [action.cardId]: {
          ...state[action.cardId],
          status: toggleCard(state[action.cardId].status)
        }
      }
      case 'UPDATE_CARDS_STATUS':
        return {
          ...state,
          [action.cards[0]]: {
            ...state[action.cards[0]],
            status: action.status
          },
          [action.cards[1]]: {
            ...state[action.cards[1]],
            status: action.status
          }
        }
    default:
      return state;
  }
}

export default boardReducer;