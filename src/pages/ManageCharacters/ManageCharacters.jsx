import "./ManageCharacters.css";
import React from "react";
import FormCreateCharacter from "../../components/FormCreateCharacter/FormCreateCharacter";
import useFormNewCharacters from "../../hooks/useFormNewCharacters";

const ManageCharacters = () => {
    const { inputName, inputKi, inputKiMax, inputImage, imageName, getImageName, submit } = useFormNewCharacters();

    return (
        <div className='manageCharacters-container'>
            <h1 className='title-manageCharacters'>Creacion del personaje</h1>
            <FormCreateCharacter
                inputName={inputName}
                inputKi={inputKi}
                inputKiMax={inputKiMax}
                inputImage={inputImage}
                imageName={imageName}
                getImageName={getImageName}
                submit={submit}
            />
        </div>
    );
};

export default ManageCharacters;
