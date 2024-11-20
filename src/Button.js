import './Button.css'

export function Button(props){
    return(
        <button className='Button' onClick={props.onClick}>
            {props.children}
        </button>
    )
}

