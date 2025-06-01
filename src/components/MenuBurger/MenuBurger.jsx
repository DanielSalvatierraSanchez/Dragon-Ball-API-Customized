import "./MenuBurger.css";
import React from "react";
import Nav from "../Nav/Nav";
import useToggleMenu from "../../hooks/useToggleMenu";
import Button from "../Button/Button";

const MenuBurger = () => {
    const { toggleMenu, closeMenu, menuIsOpen } = useToggleMenu();

    return (
        <div className='menuBurger-container'>
            <Button className={"menuBurger-button"} fnc={toggleMenu} src={"/assets/ball.webp"} alt={""}></Button>
            {menuIsOpen && <Nav closeMenu={closeMenu} />}
        </div>
    );
};

export default MenuBurger;
