import { useEffect, useReducer } from "react";
import { characterByIdReducer, INITIAL_STATE_CHARACTER_BY_ID } from "../utils/ReducerCharacterById";
import { fetchApiCharacterById } from "../api/FetchApiCharacterById";
import { CharacterByIdContext } from "../context/useCharacterByIdContext";
import { useParams } from "react-router-dom";

const CharacterByIdProvider = ({ children }) => {
    const { id } = useParams();
    const [state, dispatch] = useReducer(characterByIdReducer, INITIAL_STATE_CHARACTER_BY_ID);

    useEffect(() => {
        fetchApiCharacterById(dispatch, id);
    }, [id]);

    return <CharacterByIdContext.Provider value={{ state, dispatch }}>{children}</CharacterByIdContext.Provider>;
};

export default CharacterByIdProvider;
