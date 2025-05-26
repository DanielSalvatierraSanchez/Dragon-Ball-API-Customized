import NewCharactersCard from "../../components/Cards/NewCharactersCard/NewCharactersCard";
import Loader from "../../components/Loader/Loader";
import { useCharactersContext } from "../../context/useCharactersContext";
import "./NewCharacters.css";
import React from "react";

const NewCharacters = () => {
    const { state } = useCharactersContext();
    const newCharacters = state.newCharacters;

    if (newCharacters.length === 0)
        return (
            // <Loader />
            <>
                <h1 className='newCharacters-empty'>No hay personajes nuevos</h1>
            </>
        );

    return (
        <div className='newCharacters-container'>
            {newCharacters.map((newCharacter) => (
                <NewCharactersCard key={newCharacter} newCharacter={newCharacter} />
            ))}
        </div>
    );
};

export default NewCharacters;
