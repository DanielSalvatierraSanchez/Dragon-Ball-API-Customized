import NewCharactersCard from "../../components/Cards/NewCharactersCard/NewCharactersCard";
import { useCharacters } from "../../utils/Context";
import "./NewCharacters.css";
import React from "react";

const NewCharacters = () => {
    const { state } = useCharacters();

    if (!state.newCharacters) return <Loader />;
    return (
        <div className='newCharacters-container'>
            {state.newCharacters.map((newCharacter) => (
                <NewCharactersCard newCharacter={newCharacter} />
            ))}
        </div>
    );
};

export default NewCharacters;
