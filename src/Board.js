import './App.css';
import { Dice } from './Dice';

const DEFAULT_NUM =6

export function Board(props) {
    const color = props.color
    const name =props.name
    const history =props.history

    const num =history.at(-1) || DEFAULT_NUM
    
    return (
        <div>
            <div>{name}</div>
            <Dice color={color} num={num}/>
            <div>
                {history.join(', ')}
            </div>
        </div>
    );
}
