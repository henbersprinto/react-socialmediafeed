import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {textValue, replaceText} from './textSlice'

const Text = () => {

    const textVal = useSelector(state => state.text.value);
    const dispatch = useDispatch();
    // const [input, setInput] = useState('');
    return (
        <div>
            <span style={{marginLeft: "300px"}}>{textVal}</span>
            <input type="text" placeholder="Ersätt text här..." onChange={(e) => dispatch(replaceText(e.target.value))}></input>
            {/* <button type="button" onClick={() => dispatch(replaceText(input))}>Update text</button> */}
        </div>
    )
}

export default Text