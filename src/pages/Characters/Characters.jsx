import "./Characters.css";
import React, { useEffect, useReducer } from "react";
import Loader from "../../components/Loader/Loader";
import CharacterCard from "../../components/Cards/CharactersCard/CharactersCard";
import Pagination from "../../components/Pagination/Pagination";
import { charactersReducer, INITIAL_STATE_CHARACTERS } from "../../hooks/ReducerCharacters";
import { fetchApiCharacters } from "../../api/FetchApi";

const Characters = () => {
    const [state, dispatch] = useReducer(charactersReducer, INITIAL_STATE_CHARACTERS);
    const { page, lastPage, limit, loading, characters } = state;

    useEffect(() => {
        fetchApiCharacters(dispatch, page, limit);
    }, [page, limit]);

    return (
        <div className='characters-container'>
            <div className='characters-cards'>
                {loading && <Loader />}
                {characters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
                <Pagination page={page} lastPage={lastPage} dispatch={dispatch} />
            </div>
        </div>
    );
};

export default Characters;
