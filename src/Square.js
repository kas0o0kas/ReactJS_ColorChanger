import React from 'react';

const Square = ({colorValue, hexValue}) => {
    return (
        <div>
            <div
                className="square"
                style = {{backgroundColor : colorValue}}
            >
                    <p>{colorValue ? colorValue : "Empty Value"}</p>
                    <p>{hexValue ? hexValue : null }</p>
                </div>
        </div>
    );
};

export default Square;