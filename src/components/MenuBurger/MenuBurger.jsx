import Nav from "../Nav/Nav";
import "./MenuBurger.css";
import React, { useState } from "react";

const MenuBurger = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };
    const closeMenu = () => {
        setMenuIsOpen(menuIsOpen);
    };

    return (
        <div className='menuBurger-container'>
            <button className='menuBurger-button' onClick={toggleMenu}>
                <img src='/assets/ball.webp' />
            </button>
            {menuIsOpen && <Nav closeMenu={closeMenu} />}
        </div>
    );
};

export default MenuBurger;
