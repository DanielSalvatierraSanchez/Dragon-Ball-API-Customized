import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Characters from "./pages/Characters/Characters";
import CharacterById from "./pages/CharacterById/CharacterById";
import NotFound from "./pages/404/404";
import Transformations from "./pages/Transformations/Transformations";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/characters' element={<Characters />} />
                <Route path='/characters/:id' element={<CharacterById />} />
                <Route path='/characters/:id/transformations' element={<Transformations />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
