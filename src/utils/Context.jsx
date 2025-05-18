import { createContext } from "react";
import { charactersReducer, INITIAL_STATE_CHARACTERS } from "./ReducerCharacters";
import { useEffect } from "react";
import { fetchApiCharacters } from "../api/FetchApiCharacters";
import { useReducer } from "react";
import { useContext } from "react";

const CharactersContext = createContext();

export const useCharacters = () => useContext(CharactersContext);

const CharactersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(charactersReducer, INITIAL_STATE_CHARACTERS);
    const { page, limit, characters } = state;
    console.log(characters, "CHARACTERS DEL CONTEXT");

    useEffect(() => {
        fetchApiCharacters(dispatch, 1, 100);
    }, [page, limit]);

    return <CharactersContext.Provider value={{ state, dispatch }}>{children}</CharactersContext.Provider>;
};

export default CharactersProvider;
