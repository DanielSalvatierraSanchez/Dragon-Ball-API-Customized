import "./Footer.css";
import React from "react";
import Data from "../../data/Data";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <a href='https://web.dragonball-api.com/'>
                    <p>Dragon Ball API</p>
                </a>
                <p className='author'>Created by Daniel Salvatierra</p>
                <Data />
            </div>
        </footer>
    );
};

export default Footer;
