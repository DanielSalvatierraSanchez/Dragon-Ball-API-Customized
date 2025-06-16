import "./FormCreateCharacter.css";
import React from "react";
import Button from "../Button/Button";

const FormCreateCharacter = ({ inputName, inputKi, inputKiMax, inputImage, imageName, getImageName, submit }) => {
    return (
        <>
            <form className='manageCharacters-form' onSubmit={submit}>
                <div className='nameCharacter-container'>
                    <label htmlFor='name'>Nombre</label>
                    <input ref={inputName} type='text' required={true} placeholder='Introduce el nombre'></input>
                </div>
                <div className='kiCharacter-container'>
                    <label htmlFor='ki'>Ki</label>
                    <input ref={inputKi} type='number' required={true} placeholder='Introduce el ki'></input>
                </div>
                <div className='kiMaxCharacter-container'>
                    <label htmlFor='kiMax'>Ki maximo</label>
                    <input ref={inputKiMax} type='number' placeholder='Introduce el ki max'></input>
                </div>
                <div className='imageCharacter-container'>
                    <label htmlFor='image'>Imagen</label>
                    <input ref={inputImage} type='file' name='character_image' required={true} onChange={getImageName}></input>
                    {imageName && <p className='image-name'>{imageName}</p>}
                </div>
                <Button className={"create-character"} type={"submit"} text={"+ Agregar personaje"} />
            </form>
        </>
    );
};

export default FormCreateCharacter;
