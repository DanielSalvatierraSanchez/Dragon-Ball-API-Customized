import { useCharacters } from "../../utils/Context";
import "./ManageCharacters.css";
import React, { useRef } from "react";

const ManageCharacters = () => {
    const { dispatch } = useCharacters();
    const submit = (e) => {
        e.preventDefault();
        const newCharacter = () => {
            id: Math.random() * characters.length,
            ...form,
        }
    dispatch({ type: "ADD_CHARACTER", payload: newCharacter})
    };

    const inputName = useRef();
    const inputKi = useRef();
    const inputKiMax = useRef();
    const inputImage = useRef();

    return (
        <div className='manage_characters-container'>
            <h1>Creacion del personaje</h1>
            <form onSubmit={submit}>
                <div className='name-container'>
                    <label htmlFor=''>Nombre</label>
                    <input ref={inputName} type='string'></input>
                </div>
                <div className='ki-container'>
                    <label htmlFor=''>Ki</label>
                    <input ref={inputKi} type='number'></input>
                </div>
                <div className='kiMax-container'>
                    <label htmlFor=''>Ki maximo</label>
                    <input ref={inputKiMax} type='number'></input>
                </div>
                <div className='image-container'>
                    <label htmlFor=''>Imagen</label>
                    <input ref={inputImage} type='file'></input>
                </div>
                <button className='agree-character'>➕ Agregar personaje</button>
            </form>
        </div>
    );
};

export default ManageCharacters;
