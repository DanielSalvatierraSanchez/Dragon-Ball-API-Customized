import "./Modal.css";
import React from "react";
import Button from "../Button/Button";

const Modal = ({ newCharacter, toggleModal }) => {
    return (
        <div key={newCharacter.id} className='modal-card'>
            <p className='modal-name'>{newCharacter.name}</p>
            <img className='modal-image' src={newCharacter.image} alt={newCharacter.name}></img>
            <p className='modal-ki'>Ki: {newCharacter.ki}</p>
            <p className='modal-ki-max'>Ki Max: {newCharacter.kiMax}</p>
            <Button className={"modal-button-close"} fnc={toggleModal} text={"Volver atras"} src={"./assets/ball.webp"} alt={"volver atras"} />
        </div>
    );
};

export default Modal;
