import "./CharacterById.css";
import React from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import CharacterCard from "../../components/Cards/CharacterCard/CharacterCard";
import GoBack from "../../components/GoBack/GoBack";
import { useCharacterByIdContext } from "../../context/useCharacterByIdContext";

const CharacterById = () => {
    const { state } = useCharacterByIdContext();
    const { character, transformations } = state;

    if (!character) return <Loader />;

    return (
        <div className='character-container'>
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
