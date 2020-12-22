import React from 'react'

const ButtonControl = (props) => {

    let btnClass = "btn btn-primary";

    if (props.buttonType.toLowerCase() === "primary") {
        btnClass = "btn btn-primary";
    }
    else if (props.buttonType.toLowerCase() === "danger") {
        btnClass = "btn btn-danger";
    }

    return (
        <div>
            <button
                type="button"
                class={btnClass}
                onClick={props.onClick}>
                {props.children}
            </button>
        </div>
    )
}

export default ButtonControl

