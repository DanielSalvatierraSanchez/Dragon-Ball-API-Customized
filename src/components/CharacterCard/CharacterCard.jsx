import "./CharacterCard.css";
import { Link } from "react-router-dom";
import React from "react";

const CharacterCard = ({ character }) => {
    return (
        <div className='characters-card'>
            <Link to={`/characters/${character.id}`} key={character.id}>
                <img className='characters-image-card' src={character.image} alt={character.name}></img>
            </Link>
            <p className='characters-name-card'>{character.name}</p>
        </div>
    );
};

export default CharacterCard;
