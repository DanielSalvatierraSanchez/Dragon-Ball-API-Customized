import "./NewCharactersCard.css";
import React, { useState } from "react";
import Modal from "../../Modal/Modal";

const NewCharactersCard = ({ newCharacter }) => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const toggleModal = () => {
        setIsOpenModal(!isOpenModal);
    };

    return (
        <>
            {!isOpenModal ? (
                <div key={newCharacter.id} className='newCharacters-card' onClick={toggleModal}>
                    <p className='newCharacters-card-name'>{newCharacter.name}</p>
                    <img className='newCharacters-card-image' src={newCharacter.image} alt={newCharacter.name}></img>
                    {/* <p className='newCharacters-card-ki'>Ki: {newCharacter.ki}</p>
            <p className='newCharacters-card-ki-max'>Ki Max: {newCharacter.kiMax}</p> */}
                </div>
            ) : (
                <Modal newCharacter={newCharacter} toggleModal={toggleModal} />
            )}
        </>
    );
};

export default NewCharactersCard;
