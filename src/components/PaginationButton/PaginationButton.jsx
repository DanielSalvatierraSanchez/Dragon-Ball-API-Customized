import "./PaginationButton.css";
import React from "react";

const PaginationButton = ({ className, disabled, fnc, text }) => {
    return (
        <>
            <button className={className} disabled={disabled} onClick={fnc}>
                {text}
            </button>
        </>
    );
};

export default PaginationButton;
