import './App.css';
import { Board}  from './Board.js';
import { useState } from 'react';
import { Button } from './Button';


const random =(n)=>{
  return Math.floor(Math.random() * n)+1
}

function App() {
  const [myGameHistory, setMyGameHistory] = useState([])
  const [yourGameHistory, setYourGameHistory] = useState([])
  
  const handleRollClick = () => {
    const randomNum = random(6)
    setMyGameHistory([...myGameHistory,randomNum])

    const randomYourNum =random(6)
    setYourGameHistory([...yourGameHistory,randomYourNum])
}
  const handleResetClick =() =>{
      setMyGameHistory([])
      setYourGameHistory([])
  }
  
  return (
    <div>
      <Board
        color ="blue" 
        name ="나" 
        history = {myGameHistory}
      />
      <Board 
        color ="red" 
        name ="너" 
        history = {yourGameHistory}
      />
      <Button onClick={handleRollClick}>던지기</Button>
      <Button onClick={handleResetClick}>처음부터</Button>
    </div>
  );
}

export default App;
