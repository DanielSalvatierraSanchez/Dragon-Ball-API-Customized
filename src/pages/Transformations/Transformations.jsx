import "./Transformations.css";
import Loader from "../../components/Loader/Loader";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TransformationsCard from "../../components/Cards/TransformationsCard/TransformationsCard";

const Transformations = () => {
    const { id } = useParams();
    const [transformations, setTransformations] = useState([]);
    const [character, setCharacter] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dragonball-api.com/api/characters/" + id)
            .then((res) => res.json())
            .then((res) => {
                setTransformations(res.transformations);
                setCharacter(res);
                setLoading(false);
            });
    }, [id]);

    if (!transformations || !character) return <Loader />;

    return (
        <>
            <div className='transformations-container'>
                {loading && <Loader />}
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
