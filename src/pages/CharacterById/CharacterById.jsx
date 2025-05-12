import "./CharacterById.css";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";

const CharacterById = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState();
    const [transformations, setTransformations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setCharacter([]);
        setTransformations([]);
        fetch("https://dragonball-api.com/api/characters/" + id)
            .then((res) => res.json())
            .then((res) => {
                setCharacter(res);
                setTransformations(res.transformations);
                setLoading(false);
            });
    }, [id]);

    if (!character) return <Loader />;

    return (
        <div className='character-container'>
            <div className='character-card'>
                {loading && <Loader />}
                <h1>{character.name}</h1>
                <img className='character-image-card' src={character.image} alt={character.name} />
                <p>Ki: {character.ki}</p>
                <p>Ki maximo: {character.maxKi}</p>
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
        </div>
    );
};

export default CharacterById;
