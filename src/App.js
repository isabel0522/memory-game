import './App.css';
import Board from './components/Board';
import Instructions from './components/Instructions';

function App() {
  return (
    <div className="app">
      <div className="game">
        <Instructions></Instructions>
        <Board></Board>
      </div>
    </div>
  );
}

export default App;
