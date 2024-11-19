import { useState } from 'react';
import './App.css';
import { Button } from './Button';
import { Dice } from './Dice';

const DEFAULT_NUM =6

const random =(n)=>{
  return Math.floor(Math.random() * n)+1
}

function App() {
  const [num, setNum] = useState(DEFAULT_NUM)
  const [gameHistory, setGameHistory] = useState([])
  const handleRollClick = () => {
    const random_num = random(6)
    setNum(random_num)
    gameHistory.push(random_num)
    setGameHistory([...gameHistory])
  }
  const handleResetClick =() =>{
    setNum(DEFAULT_NUM);
    setGameHistory([])
  }

  return (
    <>
          <Dice color="blue" num={num}/>
          <Button onClick={handleRollClick}>던지기</Button>
          <Button onClick={handleResetClick}>처음부터</Button>
          <div>
            {gameHistory.join(',')}
          </div>
    </>
  );
}

export default App;
