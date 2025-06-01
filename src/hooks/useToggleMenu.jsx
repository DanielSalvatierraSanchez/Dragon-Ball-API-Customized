import React, { useState } from "react";

const useToggleMenu = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
        document.body.style.overflow = !menuIsOpen ? "hidden" : "auto";
    };

    const closeMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    return { toggleMenu, closeMenu, menuIsOpen };
};

export default useToggleMenu;
