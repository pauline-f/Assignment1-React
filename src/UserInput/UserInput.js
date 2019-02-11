import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <input type="text" onClick={props.click}/>
        </div>
    )
};

export default userInput;