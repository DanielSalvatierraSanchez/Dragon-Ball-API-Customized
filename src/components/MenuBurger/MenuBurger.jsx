import "./MenuBurger.css";
import React, { useState } from "react";
import Nav from "../Nav/Nav";

const MenuBurger = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
        document.body.style.overflow = menuIsOpen ? "auto" : "hidden";
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
