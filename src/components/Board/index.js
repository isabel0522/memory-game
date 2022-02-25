import React, { useReducer } from 'react';
import './board.css';
import initBoardData from '../../utilities/initBoardData';
import runBoardRule from '../../utilities/runBoardRule';
import checkFinish from '../../utilities/checkFinish';
import boardReducer from './boardReducer';
import Card from '../Card';
import Finish from './Finish'

const Board = ({cards=24}) => {
  const [boardData, dispatch] = useReducer(boardReducer, initBoardData(cards));

  const handleCardClick = (id) => {
    dispatch({type: 'TOGGLE_CARD', id})
  }

  const handlePlayAgain = () => {
    dispatch({type: 'INIT_BOARD', payload: initBoardData()})

  }

  console.log(boardData);

  runBoardRule(boardData, dispatch);

  if(checkFinish(boardData)) {
    return <Finish handlePlayAgain={handlePlayAgain}></Finish>
  }

  return (
    <div className='board'>
      {Object.keys(boardData).map(key=>(
        <Card key={key} cardId={key} cardData={boardData[key]} handleCardClick={handleCardClick}></Card>
      ))}
    </div>
  )
}

export default Board;