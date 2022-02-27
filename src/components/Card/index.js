import React from 'react';
import { useDispatch } from 'react-redux';
import './index.css';
import { toggleCard } from '../../redux/actions';

/**
 * Once a card is clicked, toggle its status
 * 
 * @param {Function} dispatch 
 * @param {String} id 
 */
const handleCardClick = (dispatch, id) => {
  dispatch(toggleCard(id));
}

const Card = ({ cardId, cardData }) => {
  // Throw error if card props are missing
  if (!cardId || !cardData) {
    throw new Error('card props are missing');
  }

  const dispatch = useDispatch();
  const {status, content} = cardData;
  return (
    <div className="scene">
      <div className={`card ${status}`}>
        <div className="card__face card__face--front" onClick={()=>handleCardClick(dispatch, cardId)}>
          <img src={`./assets/mario/${content}.png`} alt={`card face up ${content}`} />
        </div>
        <div className="card__face card__face--back" onClick={()=>handleCardClick(dispatch, cardId)}>
          <img src='./assets/mario/down.png' alt={`card face down`} />
        </div>
      </div>
    </div>
  )
}

export default Card;