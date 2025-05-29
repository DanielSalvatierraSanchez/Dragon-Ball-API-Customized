import { charactersReducer, INITIAL_STATE_CHARACTERS } from "../utils/ReducerCharacters";
import { useEffect } from "react";
import { fetchApiCharacters } from "../api/FetchApiCharacters";
import { useReducer } from "react";
import { CharactersContext } from "../context/useCharactersContext";

const CharactersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(charactersReducer, INITIAL_STATE_CHARACTERS);
    const { page, limit } = state;

    useEffect(() => {
        fetchApiCharacters(dispatch, page, limit);
    }, [page, limit]);

    return <CharactersContext.Provider value={{ state, dispatch }}>{children}</CharactersContext.Provider>;
};

export default CharactersProvider;
