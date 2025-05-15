import "./GoBack.css";
import React from "react";

const GoBack = ({ src, text, character }) => {
    return (
        <p className='link-back'>
            <img className='link-back-image' src={src} />
            {text} {character}
        </p>
    );
};

export default GoBack;
