import "./ManageCharacters.css";
import React from "react";
import FormCreateCharacter from "../../components/FormCreateCharacter/FormCreateCharacter";
import useFormNewCharacters from "../../hooks/useFormNewCharacters";

const ManageCharacters = () => {
    const { inputName, inputImage, submit } = useFormNewCharacters();

    return (
        <div className='manageCharacters-container'>
            <h1 className='title-manageCharacters'>Creacion del personaje</h1>
            <FormCreateCharacter inputName={inputName} inputImage={inputImage} submit={submit} />
        </div>
    );
};

export default ManageCharacters;
