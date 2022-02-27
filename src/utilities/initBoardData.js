/**
 * Generate initial state
 * @param {Number} count 
 * @return {Object}
 * 
 */
const initBoardData = (count=24) => {
  // Must be even number
  if (count%2 !== 0) {
    throw new Error(`You have ${count} cards. Please use a even number.`);
  }

  let data = {};
  let uniqueCards = count/2;

  // Init two set of cards
  for(let set=0; set<2; set++) {
    // Init unique cards
    for(let i=0; i<uniqueCards; i++) {
      // Generate a new random number
      let random = generateRandomNum(count);
      while(data[random]) {
        random = generateRandomNum(count);
      }
      data[random] = {
        status: 'down',
        content: i
      }
    }
  }

  return data;
}

function generateRandomNum(count) {
  // Generate a number between 0~24
  return Math.floor(Math.random() * count);
}

export default initBoardData;