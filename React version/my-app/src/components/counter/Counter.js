import React, {useState} from 'react'

const Counter = ({value, dispatch}) => {
    const [num, setNum] = useState(0)
    return (
        <div>
            <span>{value}</span>
            <button type="button" onClick={() => dispatch({type: "ADD_ONE"})}>+1</button>
            <button type="button" onClick={() => dispatch({type: "SUB_ONE"})}>-1</button>
            <input type="number" onChange={(e) => setNum(e.target.value)}></input>
            <button type="button" onClick={() => dispatch({type: "ADD_PAYLOAD", payload: (Number)(num) || 0})}>Add payload</button>
        </div>
    )
}

export default Counter