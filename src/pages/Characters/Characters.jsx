import "./Characters.css";
import React, { useEffect, useReducer } from "react";
import Loader from "../../components/Loader/Loader";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Pagination from "../../components/Pagination/Pagination";
import { fetchReducer, INITIAL_STATE } from "../../hooks/ReducerCharacters";
import { fetchApi } from "../../hooks/FetchAPI";

const Characters = () => {
    const [state, dispatch] = useReducer(fetchReducer, INITIAL_STATE);
    const { page, lastPage, limit, loading, characters } = state;

    useEffect(() => {
        fetchApi(dispatch, page, limit);
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
