import React from 'react';
import colorNames from 'colornames';
const Input = ({colorValue,setColorValue,setHexValue}) => {

    return (
        <div>
            <form 
                    onSubmit={(e) => e.preventDefault()}>
                        <label>Add Color Name:</label>
                        <input
                            type="text"
                            placeholder="Add Color Name"
                            value = {colorValue}
                            onChange = {(event) => {
                                setColorValue(event.target.value);
                                setHexValue(colorNames(event.target.value));
                                }
                            }
                            ></input>
                </form>
        </div>
    );
};

export default Input;