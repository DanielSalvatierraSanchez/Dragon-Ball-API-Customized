import "./Nav.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ closeMenu }) => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/' className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/characters' className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
                        Personajes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new_characters' className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
                        Nuevos Personajes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/manage_characters' className={({ isActive }) => (isActive ? "active" : "")} onClick={closeMenu}>
                        Crear Personajes
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
