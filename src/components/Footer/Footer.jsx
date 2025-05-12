import "./Footer.css";
import Data from "../../data/Data";
import React from "react";

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
