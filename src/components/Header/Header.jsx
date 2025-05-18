import "./Header.css";
import { NavLink } from "react-router-dom";
import React from "react";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' activeclassname='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/characters' activeclassname='active'>
                            Personajes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/new_characters' activeclassname='active'>
                            Nuevos Personajes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/manage_characters' activeclassname='active'>
                            Gestion
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
