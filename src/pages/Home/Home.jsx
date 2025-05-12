import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='home-container'>
            {/* <audio className='audio' src='./assets/DragonBallZ.mp3' autoPlay></audio> */}
            <h1>Bienvenido al mundo de Dragon Ball</h1>
            <h2>¿Quieres conocer a sus personajes?</h2>
            <p>Coge la Dragon Ball</p>
            <Link to='/characters'>
                <img src='./assets/ball.webp' />
            </Link>
        </div>
    );
};

export default Home;
