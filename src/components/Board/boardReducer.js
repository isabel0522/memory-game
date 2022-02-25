import * as cardStatus from './../../constants/cardStatus';

// TODO: unit test
const toggleCard = (prevStatus) => {
  if (prevStatus === cardStatus.CARD_MATCH) {
    return cardStatus.CARD_MATCH;
  }
  return prevStatus === cardStatus.CARD_DOWN ? cardStatus.CARD_UP : cardStatus.CARD_DOWN;
}

const boardReducer = (state, action) => {
  switch (action.type) {
    case 'INIT_BOARD':
      return action.payload;
    case 'TOGGLE_CARD':
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          status: toggleCard(state[action.id].status)
        }
      }
      case 'MATCH_CARDS':
        return {
          ...state,
          [action.cards[0]]: {
            ...state[action.cards[0]],
            status: state[action.cards[0]].status = cardStatus.CARD_MATCH
          },
          [action.cards[1]]: {
            ...state[action.cards[1]],
            status: state[action.cards[1]].status = cardStatus.CARD_MATCH
          }
        }
        case 'FLIP_DOWN_CARDS':
          return {
            ...state,
            [action.cards[0]]: {
              ...state[action.cards[0]],
              status: state[action.cards[0]].status = cardStatus.CARD_DOWN
            },
            [action.cards[1]]: {
              ...state[action.cards[1]],
              status: state[action.cards[1]].status = cardStatus.CARD_DOWN
            }
          }
    default:
      throw new Error('action cannot found');
  }
}

export default boardReducer;