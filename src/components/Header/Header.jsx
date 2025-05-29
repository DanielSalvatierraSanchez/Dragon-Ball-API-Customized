import "./Header.css";
import React from "react";
import Nav from "../Nav/Nav";
import MenuBurger from "../MenuBurger/MenuBurger";

const Header = () => {
    return (
        <header>
            <section className='desktop-header'>
                <Nav />
            </section>
            <section className='mobile-header'>
                <MenuBurger />
            </section>
        </header>
    );
};

export default Header;
