import "./NewCharacters.css";
import React from "react";
import NewCharactersCard from "../../components/Cards/NewCharactersCard/NewCharactersCard";
import { useCharactersContext } from "../../context/useCharactersContext";

const NewCharacters = () => {
    const { state } = useCharactersContext();

    const newCharacters = state.newCharacters;
    if (newCharacters.length === 0) {
        return (
            <>
                <h1 className='newCharacters-empty'>No hay personajes nuevos</h1>
            </>
        );
    }

    return (
        <div className='newCharacters-container'>
            {newCharacters.map((newCharacter) => (
                <NewCharactersCard key={newCharacter.id} newCharacter={newCharacter} />
            ))}
        </div>
    );
};

export default NewCharacters;
