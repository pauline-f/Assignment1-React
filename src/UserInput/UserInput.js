import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed} value={props.username} onClick={props.click}/>
        </div>
    )
};

export default userInput;