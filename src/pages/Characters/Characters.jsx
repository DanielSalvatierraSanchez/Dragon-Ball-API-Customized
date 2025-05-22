import "./Characters.css";
import React from "react";
import Loader from "../../components/Loader/Loader";
import Pagination from "../../components/Pagination/Pagination";
import CharactersCard from "../../components/Cards/CharactersCard/CharactersCard";
import { useCharactersContext } from "../../context/useCharactersContext";

const Characters = () => {
    const { state, dispatch } = useCharactersContext();
    const { characters, page, lastPage } = state;

    if (!characters) return <Loader />;

    return (
        <div className='characters-container'>
            {characters.map((character) => (
                <CharactersCard key={character.id} character={character} />
            ))}
            <Pagination page={page} lastPage={lastPage} dispatch={dispatch} />
        </div>
    );
};

export default Characters;
