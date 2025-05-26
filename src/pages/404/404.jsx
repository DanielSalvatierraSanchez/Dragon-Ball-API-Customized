import "./404.css";
import { Link } from "react-router-dom";
import React from "react";
import Loader from "../../components/Loader/Loader";

const NotFound = () => {
    return (
        <div className='notFound-container'>
            <h1>404 NOT FOUND</h1>
            <h3>Coge la Dragon Ball</h3>
            <Link to='/'>
                <Loader></Loader>
            </Link>
        </div>
    );
};

export default NotFound;
