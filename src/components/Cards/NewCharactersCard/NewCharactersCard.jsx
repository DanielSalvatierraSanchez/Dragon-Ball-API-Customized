import "./NewCharactersCard.css";
import React from "react";

const NewCharactersCard = ({ newCharacter }) => {
    console.log("newCharacterCard => props newCharacter", { newCharacter });
    return (
        <div
            key={newCharacter.id}
            className='newCharacters-card'
        >
            <h1>{newCharacter.name}</h1>
            <img className='newCharacters-image-card' src={newCharacter.image} alt={newCharacter.name}></img>
            {/* <p>Ki: {newCharacter.ki}</p> */}
            {/* <p>Ki Max: {newCharacter.kiMax}</p> */}
        </div>
    );
};

export default NewCharactersCard;
