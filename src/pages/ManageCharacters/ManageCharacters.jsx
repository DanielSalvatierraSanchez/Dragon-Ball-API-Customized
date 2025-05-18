import { useCharacters } from "../../utils/Context";
import "./ManageCharacters.css";
import React, { useRef, useState } from "react";

const ManageCharacters = () => {
    const { dispatch } = useCharacters();

    const inputName = useRef();
    const inputKi = useRef();
    const inputKiMax = useRef();
    const inputImage = useRef();

    const [form, setForm] = useState({});

    // const handleChange = () => {
    //     // setForm({
    //     //     ...form,
    //     //     [e.target.inputName]: e.target.value
    //     //     //  [e.target.inputKi]: e.target.value, [e.target.inputKiMax]: e.target.value, [e.target.inputImage]: e.target.value
    //     // });
    // };
    const submit = (e) => {
        e.preventDefault();

        const newCharacter = {
            id: crypto.randomUUID(),
            name: inputName.current.value,
            ki: inputKi.current.value,
            // kiMax: inputKiMax.current.value,
            // image: inputImage.current.files[0].name
            // URL.createObjectURL(inputImage.current.files[0])
        };

        dispatch({ type: "ADD_CHARACTER", payload: newCharacter });

        setForm({
            ...form,
            inputName: (inputName.current.value = ""),
            inputKi: (inputKi.current.value = ""),
            inputKiMax: (inputKiMax.current.value = ""),
            inputImage: (inputImage.current.value = "")
        });
    };

    return (
        <div className='manageCharacters-container'>
            <h1 className='title-manageCharacters'>Creacion del personaje</h1>
            <form className='manageCharacters-form' onSubmit={submit}>
                <div className='nameCharacter-container'>
                    <label htmlFor='name'>Nombre</label>
                    <input ref={inputName} type='string' onChange={setForm} required='true' placeholder='Introduce el nombre'></input>
                </div>
                <div className='kiCharacter-container'>
                    <label htmlFor='ki'>Ki</label>
                    <input ref={inputKi} type='number' required='true' placeholder='Introduce el ki'></input>
                </div>
                <div className='kiMaxCharacter-container'>
                    <label htmlFor='kiMax'>Ki maximo</label>
                    <input ref={inputKiMax} type='number' placeholder='Introduce el ki max'></input>
                </div>
                <div className='imageCharacter-container'>
                    <label htmlFor='image'>Imagen</label>
                    <input ref={inputImage} type='file' placeholder='Sube una imagen'></input>
                </div>
                <button className='agreeCharacter'>+ Agregar personaje</button>
            </form>
        </div>
    );
};

export default ManageCharacters;
