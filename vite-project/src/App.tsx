import { useState } from 'react';
import Block from './components/block';
import "./App.css";

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState('X');
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [winner, setWinner] = useState('');

  const checkWinner = (state: Array<string | null>) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] !== null && state[a] && state[a] === state[b] && state[a] === state[c]) {
        return true;
      }
    }

    return false;
  };


  const handleBlockClick = (index: number) => {
    const stateCopy = Array.from(state);

    if (stateCopy[index] !== null || winner) return;

    stateCopy[index] = currentTurn;

    // check if someone is winner
    const winnerResult = checkWinner(stateCopy);

    if (winnerResult) {
      const winnerName = winnerResult ? player1 : player2;
      setWinner(`${winnerName} won the game.`);
    }

    setCurrentTurn(currentTurn === 'X' ? 'O' : 'X');
    setState(stateCopy);
  };

  console.log("STATE", state);


  const handlePlayerNameChange = (playerNumber: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const playerName = event.target.value;
    if (playerNumber === 1) {
      setPlayer1(playerName);
    } else {
      setPlayer2(playerName);
    }

  };


  return (

    <div className='board'>
     
      <h1>Tic Tac Toe</h1>

      <div className="player-names">
        <span>{player1 || 'Player 1'}</span> vs <span>{player2 || 'Player 2'}</span>
      </div>


      <div className="player-input">
        <span>
          <label className="label">Player 1  </label>
          <input type="text" className="input-field" onChange={(e) => handlePlayerNameChange(1, e)} />
        </span>
        <span>
          <label className="label">Player 2  </label>
          <input type="text" className="input-field" onChange={(e) => handlePlayerNameChange(2, e)} />
        </span>


      </div>

        <div className="row">
          <Block onClick={() => handleBlockClick(0)} value={state[0]} />
          <Block onClick={() => handleBlockClick(1)} value={state[1]} />
          <Block onClick={() => handleBlockClick(2)} value={state[2]} />
        </div>

        <div className="row">
          <Block onClick={() => handleBlockClick(3)} value={state[3]} />
          <Block onClick={() => handleBlockClick(4)} value={state[4]} />
          <Block onClick={() => handleBlockClick(5)} value={state[5]} />
        </div>

        <div className="row">
          <Block onClick={() => handleBlockClick(6)} value={state[6]} />
          <Block onClick={() => handleBlockClick(7)} value={state[7]} />
          <Block onClick={() => handleBlockClick(8)} value={state[8]} />
        </div>


      {winner && <div className="alert">{winner}</div>}

    </div>
  );
}

export default App;
