import "./404.css";
import { Link } from "react-router-dom";
import React from "react";

const NotFound = () => {
    return (
        <div className='notFound-container'>
            ❌ Not Found ❌
            <h3>
                <Link to='/'>Home 🏠</Link>
            </h3>
        </div>
    );
};

export default NotFound;
