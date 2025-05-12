import "./Data.css";
import React from "react";

const Data = () => {
    return (
        <div className='data'>
            <a href='mailto: dss250583@gmail.com' target='_blank' rel='noopener noreferrer'>
                <img src='/assets/mail.webp' alt='Email' />
            </a>
            <a href='tel:+34606369977' target='_blank' rel='noopener noreferrer'>
                <img src='/assets/whatsapp.webp' alt='Whatsapp' />
            </a>
            <a href='https://linkedin.com/in/danielsalvatierrasanchez' target='_blank' rel='noopener noreferrer'>
                <img src='/assets/linkedin.webp' alt='Linkedin' />
            </a>
            <a href='https://github.com/DanielSalvatierraSanchez' target='_blank' rel='noopener noreferrer'>
                <img src='/assets/github.webp' alt='GitHub' />
            </a>
            <a href='https://portfolio-daniel-salvatierra-one.vercel.app/' target='_blank' rel='noopener noreferrer'>
                <img src='/assets/web.webp' alt='Portfolio' />
            </a>
        </div>
    );
};

export default Data;
