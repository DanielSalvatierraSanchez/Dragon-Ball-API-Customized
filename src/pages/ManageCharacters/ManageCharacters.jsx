import "./ManageCharacters.css";
import React, { useRef } from "react";
import { useCharactersContext } from "../../context/useCharactersContext";
import FormCreateCharacter from "../../components/FormCreateCharacter/FormCreateCharacter";

const ManageCharacters = () => {
    const { dispatch } = useCharactersContext();
    const inputName = useRef();
    const inputImage = useRef();
    // const inputKi = useRef();
    // const inputKiMax = useRef();

    const submit = (e) => {
        e.preventDefault();

        const newCharacter = {
            id: crypto.randomUUID(),
            name: inputName.current.value,
            image: URL.createObjectURL(inputImage.current.files[0])
            // ki: inputKi.current.value,
            // kiMax: inputKiMax.current.value,
        };

        dispatch({ type: "ADD_CHARACTER", payload: newCharacter });

        inputName.current.value = "";
        inputImage.current.value = "";
        // inputKi.current.value = "";
        // inputKiMax.current.value = "";
    };

    return (
        <div className='manageCharacters-container'>
            <h1 className='title-manageCharacters'>Creacion del personaje</h1>
            <FormCreateCharacter inputName={inputName} inputImage={inputImage} submit={submit} />
        </div>
    );
};

export default ManageCharacters;
