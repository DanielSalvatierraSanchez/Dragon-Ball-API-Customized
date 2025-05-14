import "./CharacterById.css";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useReducer } from "react";
import Loader from "../../components/Loader/Loader";
import { characterByIdReducer, INITIAL_STATE_CHARACTER_BY_ID } from "../../hooks/ReducerCharacterById";
import CharacterCard from "../../components/Cards/CharacterCard/CharacterCard";
import { fetchApiCharacterById } from "../../api/FetchApiCharacterById";
import Transformations from "../Transformations/Transformations";

const CharacterById = () => {
    const { id } = useParams();
    // const [transformations, setTransformations] = useState([]);
    const [state, dispatch] = useReducer(characterByIdReducer, INITIAL_STATE_CHARACTER_BY_ID);
    const { loading, character, transformations } = state;

    useEffect(() => {
        // setTransformations([]);
        fetchApiCharacterById(dispatch, id);
        // setTransformations(res.transformations);
    }, [id]);

    if (!character) return <Loader />;

    return (
        <div className='character-container'>
            {!loading && <Loader />}
            <CharacterCard character={character} />
            {transformations && transformations.length > 0 && (
                <Link to={`./transformations`}>
                    <div className='link-transformations'>Ver transformaciones</div>
                </Link>
            )}
            <Link to='/characters'>
                <div className='link-back'>
                    <img src='/assets/radar.webp' />
                    Busca mas personajes
                </div>
            </Link>
        </div>
    );
};

export default CharacterById;
