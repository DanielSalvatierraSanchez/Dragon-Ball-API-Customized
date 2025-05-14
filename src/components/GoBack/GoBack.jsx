import "./GoBack.css";
import React from "react";

const GoBack = ({ src, text, character }) => {
    return (
        <div className='link-back'>
            <img src={src} />
            {text} {character}
        </div>
    );
};

export default GoBack;
