import React from "react";

function Input(props) {
    return (
        <input 
            type={props.type}
            value={props.value}
            disabled={props.disabled || false}
            onChange={props.onChange}
        />
    );
}

export default Input;
