import "./NewCharactersCard.css";
import React from "react";

const NewCharactersCard = ({ newCharacter }) => {
    return (
        <div key={newCharacter.id} className='newCharacters-card'>
            <h1>{newCharacter.name}</h1>
            <p>{newCharacter.ki}</p>
            {/* <p>{newCharacter.kiMax}</p> */}
            <img className='newCharacter-image-card' src={newCharacter.image} alt={newCharacter.name}></img>
        </div>
    );
};

export default NewCharactersCard;
