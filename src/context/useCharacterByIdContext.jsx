import { createContext, useContext } from "react";

export const CharacterByIdContext = createContext();

export const useCharacterByIdContext = () => useContext(CharacterByIdContext);
