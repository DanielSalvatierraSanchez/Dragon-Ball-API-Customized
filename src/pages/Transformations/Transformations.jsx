import "./Transformations.css";
import Loader from "../../components/Loader/Loader";
import React from "react";
import { Link, useParams } from "react-router-dom";
import TransformationsCard from "../../components/Cards/TransformationsCard/TransformationsCard";
import GoBack from "../../components/GoBack/GoBack";
import { useCharacterByIdContext } from "../../context/useCharacterByIdContext";

const Transformations = () => {
    const { id } = useParams();
    const { state } = useCharacterByIdContext();
    const { transformations, character } = state;

    if (!transformations) return <Loader />;

    return (
        <>
            <div className='transformations-container'>
                <audio className='audio' src='/assets/SuperSaiyan.mp3' autoPlay loop></audio>
                {transformations.map((evo) => (
                    <TransformationsCard evo={evo} />
                ))}
                <Link to={`/characters/${id}`}>
                    <GoBack src='/assets/ball.webp' text='Volver a' character={character.name} />
                </Link>
            </div>
        </>
    );
};

export default Transformations;
