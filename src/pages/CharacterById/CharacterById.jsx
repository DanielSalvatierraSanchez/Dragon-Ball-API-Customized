import "./CharacterById.css";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useReducer } from "react";
import Loader from "../../components/Loader/Loader";
import { characterByIdReducer, INITIAL_STATE_CHARACTER_BY_ID } from "../../utils/ReducerCharacterById";
import CharacterCard from "../../components/Cards/CharacterCard/CharacterCard";
import { fetchApiCharacterById } from "../../api/FetchApiCharacterById";
import GoBack from "../../components/GoBack/GoBack";

const CharacterById = () => {
    const { id } = useParams();
    const [state, dispatch] = useReducer(characterByIdReducer, INITIAL_STATE_CHARACTER_BY_ID);
    const { loading, character, transformations } = state;

    useEffect(() => {
        fetchApiCharacterById(dispatch, id);
    }, [id]);

    if (!character) return <Loader />;

    return (
        <div className='character-container'>
            {loading && <Loader />}
            <CharacterCard character={character} />
            {transformations && transformations.length > 0 && (
                <Link to={`./transformations`}>
                    <p className='link-transformations'>Ver transformaciones</p>
                </Link>
            )}
            <Link to='/characters'>
                <GoBack src='/assets/radar.webp' text='Busca mas personajes' />
            </Link>
        </div>
    );
};

export default CharacterById;
