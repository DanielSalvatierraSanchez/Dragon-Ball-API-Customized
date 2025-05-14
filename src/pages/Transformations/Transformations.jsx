import "./Transformations.css";
import Loader from "../../components/Loader/Loader";
import React, { useEffect, useReducer } from "react";
import { Link, useParams } from "react-router-dom";
import TransformationsCard from "../../components/Cards/TransformationsCard/TransformationsCard";
import { fetchApiCharacterById } from "../../api/FetchApiCharacterById";
import { characterByIdReducer, INITIAL_STATE_CHARACTER_BY_ID } from "../../hooks/ReducerCharacterById";

const Transformations = () => {
    const { id } = useParams();
    const [state, dispatch] = useReducer(characterByIdReducer, INITIAL_STATE_CHARACTER_BY_ID);
    const { loading, transformations, character } = state;

    useEffect(() => {
        fetchApiCharacterById(dispatch, id);
    }, [id]);

    if (!transformations) return <Loader />;

    return (
        <>
            <div className='transformations-container'>
                {!loading && <Loader />}
                <audio className='audio' src='/assets/SuperSaiyan.mp3' autoPlay></audio>
                {/* <h2 className='transformations-title'>Transformaciones de {character.name}</h2> */}
                {transformations.map((evo) => (
                    <TransformationsCard evo={evo} />
                ))}
                <div className='link-back-container'>
                    <Link to={`/characters/${id}`}>
                        <div className='link-back'>
                            <img src='/assets/ball.webp' />
                            Volver a {character.name}
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Transformations;
