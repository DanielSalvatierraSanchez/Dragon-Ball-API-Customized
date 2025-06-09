import React, { useRef, useState } from "react";
import { useCharactersContext } from "../context/useCharactersContext";
import { useNavigate } from "react-router-dom";

const useFormNewCharacters = () => {
    const { dispatch } = useCharactersContext();
    const navigate = useNavigate();
    const inputName = useRef();
    const inputKi = useRef();
    const inputKiMax = useRef();
    const inputImage = useRef();

    const [imageName, setImageName] = useState("No hay ninguna imagen");

    const getImageName = () => {
        const file = inputImage.current.files[0];
        file ? setImageName(file.name) : setImageName("No hay ninguna imagen");
    };

    const submit = (e) => {
        e.preventDefault();

        const newCharacter = {
            id: crypto.randomUUID(),
            name: inputName.current.value,
            ki: inputKi.current.value,
            kiMax: inputKiMax.current.value,
            image: URL.createObjectURL(inputImage.current.files[0])
        };

        dispatch({ type: "ADD_CHARACTER", payload: newCharacter });

        inputName.current.value = "";
        inputKi.current.value = "";
        inputKiMax.current.value = "";
        inputImage.current.value = "";
        setImageName("No hay ninguna imagen");

        navigate("/new_characters");
    };

    return { inputName, inputKi, inputKiMax, inputImage, imageName, getImageName, submit };
};

export default useFormNewCharacters;
