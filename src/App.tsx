import { useState } from 'react';
import './App.css';
import Block from './components/Block';

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");
  const [blockColor, setBlockColor] = useState("white");


  const checkWinner = (state: any[]) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] != null && state[a] === state[b] && state[a] === state[c])
        return true;
    }
    return false;
  };

  const handleBlockClick = (index: number) => {
    const stateCopy = Array.from(state);
    if (stateCopy[index] != null)
      return;
    stateCopy[index] = currentTurn;
    setState(stateCopy);
    const win = checkWinner(stateCopy);
    setCurrentTurn(currentTurn === 'X' ? 'O' : 'X');
    if (index == 0 || index == 2 || index == 4 || index == 6) {
      setBlockColor(blockColor === 'white' ? 'cyan' : 'cyan');
    } else {
      setBlockColor(blockColor === 'white' ? 'lightblue' : 'lightblue');
    }
    if (win) {
      alert(`Congratulations! ${currentTurn} won the game.`);
    }

  };

  return (
    <div className="container">
      <h1>Tic Tok Toe Game</h1>
      <div className="board">
        <div className="row">
          <Block blockColor = {blockColor} blockId="0" onClick={() => handleBlockClick(0)} value={state[0]} />
          <Block blockColor = {blockColor} blockId="1" onClick={() => handleBlockClick(1)} value={state[1]} />
          <Block blockColor = {blockColor} blockId="2" onClick={() => handleBlockClick(2)} value={state[2]} />
        </div>
        <div className="row">
          <Block blockColor = {blockColor} blockId="3" onClick={() => handleBlockClick(3)} value={state[3]} />
          <Block blockColor = {blockColor} blockId="4" onClick={() => handleBlockClick(4)} value={state[4]} />
          <Block blockColor = {blockColor} blockId="5" onClick={() => handleBlockClick(5)} value={state[5]} />
        </div>
        <div className="row">
          <Block blockColor = {blockColor} blockId="6" onClick={() => handleBlockClick(6)} value={state[6]} />
          <Block blockColor = {blockColor} blockId="7" onClick={() => handleBlockClick(7)} value={state[7]} />
          <Block blockColor = {blockColor} blockId="8" onClick={() => handleBlockClick(8)} value={state[8]} />
        </div>
      </div>
    </div>
  );
}

export default App;
