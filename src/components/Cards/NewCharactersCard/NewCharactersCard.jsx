import { useCharacters } from "../../../utils/Context";
import "./NewCharactersCard.css";
import React from "react";

const NewCharacters = () => {
    const { state } = useCharacters();

    return (
        <div className='newCharacter-container'>
            {state.characters.map((newCharacter) => (
                <div key={newCharacter.id} className='newCharacter-card'>
                    <h1>{newCharacter.name}</h1>
                    <p>{newCharacter.ki}</p>
                    {/* <p>{newCharacter.kiMax}</p> */}
                    <img src={newCharacter.image} alt={newCharacter.name}></img>
                </div>
            ))}
        </div>
    );
};

export default NewCharacters;
