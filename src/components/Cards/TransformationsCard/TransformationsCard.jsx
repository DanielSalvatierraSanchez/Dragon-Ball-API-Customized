import "./TransformationsCard.css";
import React from "react";

const TransformationsCard = ({ evo }) => {
    return (
        <div className='transformation-card'>
            <h2 className='transformation-name'>{evo.name}</h2>
            <p className='transformation-ki'>Ki: {evo.ki}</p>
            <img className='transformation-image' src={evo.image} alt={evo.name} />
        </div>
    );
};

export default TransformationsCard;
