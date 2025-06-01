import React from "react";

const Button = ({ className, type, fnc, text, src, alt }) => {
    return (
        <>
            <button className={className} type={type} onClick={fnc}>
                {text}
                <img src={src} alt={alt} />
            </button>
        </>
    );
};

export default Button;
