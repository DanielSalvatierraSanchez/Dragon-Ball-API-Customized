import "./CharacterCard.css";
import React from "react";

const CharacterCard = ({ character }) => {
    return (
        <div className='character-card'>
            <h1>{character.name}</h1>
            <img className='character-image-card' src={character.image} alt={character.name} />
            <p>Ki: {character.ki}</p>
            <p>Ki maximo: {character.maxKi}</p>
        </div>
    );
};

export default CharacterCard;
