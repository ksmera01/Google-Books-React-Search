import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ViewBookBtn(props) {
    return (
        <span className="btn btn-success" {...props} role="button" tabIndex="0">
            View
        </span>
    );
}

export default ViewBookBtn;