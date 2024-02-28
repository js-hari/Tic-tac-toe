import {useState} from 'react';
import Block from './components/block';
import "./App.css";

function App() {
  const[state, setState] = useState(Array(9).fill(null));

  console.log("State",state);

  return (
      <div className='board'>
        <div className="row">
          <Block value={state[0]} />
          <Block value={state[1]} />
          <Block value={state[2]} />
        </div>

        <div className="row">
          <Block value={state[3]} />
          <Block value={state[4]} />
          <Block value={state[5]} />
        </div>

        <div className="row">
          <Block value={state[6]} />
          <Block value={state[7]} />
          <Block value={state[8]} />
      </div>
    </div>
  )
}

export default App
