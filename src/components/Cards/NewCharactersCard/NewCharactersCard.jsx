import "./NewCharactersCard.css";
import React from "react";

const NewCharactersCard = ({ newCharacter }) => {
    return (
        <div key={newCharacter.id} className='newCharacters-card'>
            <p>{newCharacter.name}</p>
            <img className='newCharacters-image-card' src={newCharacter.image} alt={newCharacter.name}></img>
            <p>Ki: {newCharacter.ki}</p>
            <p>Ki Max: {newCharacter.kiMax}</p>
        </div>
    );
};

export default NewCharactersCard;
