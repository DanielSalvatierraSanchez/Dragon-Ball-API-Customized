import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
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
            {menuIsOpen && (
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/' activeclassname='active' onClick={closeMenu}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/characters' activeclassname='active' onClick={closeMenu}>
                                Personajes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/new_characters' activeclassname='active' onClick={closeMenu}>
                                Nuevos Personajes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/manage_characters' activeclassname='active' onClick={closeMenu}>
                                Crear Personajes
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default MenuBurger;
