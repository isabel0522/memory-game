import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Board from './components/Board';
import Instructions from './components/Instructions';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="game">
          <Instructions></Instructions>
          <Board></Board>
        </div>
      </div>
    </Provider>
  );
}

export default App;
