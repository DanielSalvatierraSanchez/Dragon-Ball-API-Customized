import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import CharactersProvider from "./providers/CharactersProvider.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <CharactersProvider>
            <App />
        </CharactersProvider>
    </BrowserRouter>
);
