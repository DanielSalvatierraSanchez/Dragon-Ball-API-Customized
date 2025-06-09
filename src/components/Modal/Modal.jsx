import "./Modal.css";
import React from "react";

const Modal = ({ newCharacter, toggleModal }) => {
    return (
        <div key={newCharacter.id} className='modal-card'>
            <p className='modal-name'>{newCharacter.name}</p>
            <img className='modal-image' src={newCharacter.image} alt={newCharacter.name}></img>
            <p className='modal-ki'>Ki: {newCharacter.ki}</p>
            <p className='modal-ki-max'>Ki Max: {newCharacter.kiMax}</p>
            <button className='modal-button-close' onClick={toggleModal}>
                <img src='./assets/ball.webp' alt='cerrar' />
            </button>
        </div>
    );
};

export default Modal;
