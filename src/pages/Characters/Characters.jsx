import "./Characters.css";
import React, { useEffect, useReducer } from "react";
import Loader from "../../components/Loader/Loader";
import Pagination from "../../components/Pagination/Pagination";
import { charactersReducer, INITIAL_STATE_CHARACTERS } from "../../utils/ReducerCharacters";
import CharactersCard from "../../components/Cards/CharactersCard/CharactersCard";
import { fetchApiCharacters } from "../../api/FetchApiCharacters";

const Characters = () => {
    const [state, dispatch] = useReducer(charactersReducer, INITIAL_STATE_CHARACTERS);
    const { page, lastPage, limit, loading, characters } = state;

    useEffect(() => {
        fetchApiCharacters(dispatch, page, limit);
    }, [page, limit]);

    return (
        <div className='characters-container'>
            {loading && <Loader />}
            {characters.map((character) => (
                <CharactersCard key={character.id} character={character} />
            ))}
            <Pagination page={page} lastPage={lastPage} dispatch={dispatch} />
        </div>
    );
};

export default Characters;
