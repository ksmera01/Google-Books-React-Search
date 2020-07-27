import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBookBtn(props) {
    return (
        <button className="btn btn-success save-btn buttonBorder" {...props} tabIndex="0">
            Save Book Below For Later
        </button>
    );
}

export default SaveBookBtn;