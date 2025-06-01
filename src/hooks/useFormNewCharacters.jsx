import React, { useRef } from "react";
import { useCharactersContext } from "../context/useCharactersContext";
import { useNavigate } from "react-router-dom";

const useFormNewCharacters = () => {
    const { dispatch } = useCharactersContext();
    const navigate = useNavigate();
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

        navigate("/new_characters");
    };

    return { inputName, inputImage, submit };
};

export default useFormNewCharacters;
