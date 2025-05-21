import { createContext, useContext } from "react";

export const CharactersContext = createContext();
export const useCharactersContext = () => useContext(CharactersContext);
