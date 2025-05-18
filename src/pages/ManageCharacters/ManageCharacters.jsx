import { useCharacters } from "../../utils/Context";
import "./ManageCharacters.css";
import React, { useRef, useState } from "react";

const ManageCharacters = () => {
    const { dispatch } = useCharacters();
    const [form, setForm] = useState({ inputName: "", inputKi: "", inputKiMax: "", inputImage: "" });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.inputName]: e.target.value
            //  [e.target.inputKi]: e.target.value, [e.target.inputKiMax]: e.target.value, [e.target.inputImage]: e.target.value
        });
    };
    const submit = (e) => {
        e.preventDefault();
        const newCharacter = () => {
            // id: crypto.randomUUID(),
        };

        dispatch({ type: "ADD_CHARACTER", payload: newCharacter });

        setForm({ inputName: "", inputKi: "", inputKiMax: "", inputImage: "" });
    };

    const inputName = useRef();
    const inputKi = useRef();
    const inputKiMax = useRef();
    const inputImage = useRef();

    return (
        <div className='manageCharacters-container'>
            <h1 className='title-manageCharacters'>Creacion del personaje</h1>
            <form className='manageCharacters-form' onSubmit={submit}>
                <div className='nameCharacter-container'>
                    <label htmlFor='name'>Nombre</label>
                    <input ref={inputName} type='string' onChange={handleChange} placeholder='Introduce el nombre'></input>
                </div>
                <div className='kiCharacter-container'>
                    <label htmlFor='ki'>Ki</label>
                    <input ref={inputKi} type='number' onChange={handleChange} placeholder='Introduce el ki'></input>
                </div>
                <div className='kiMaxCharacter-container'>
                    <label htmlFor='kiMax'>Ki maximo</label>
                    <input ref={inputKiMax} type='number' onChange={handleChange} placeholder='Introduce el ki max'></input>
                </div>
                <div className='imageCharacter-container'>
                    <label htmlFor='image'>Imagen</label>
                    <input ref={inputImage} type='file' onChange={handleChange} placeholder='Sube una imagen'></input>
                </div>
                <button className='agreeCharacter'>+ Agregar personaje</button>
            </form>
        </div>
    );
};

export default ManageCharacters;
