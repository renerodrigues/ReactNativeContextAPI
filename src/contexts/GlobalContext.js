import { createContext, useState } from "react";

export const GlobalContext = createContext({})

export function InfoProvider({ children }) {
    const valor = 300
    const [nome,setNome]= useState('Renê')
    return (
        <GlobalContext.Provider value={{
            valor,
            nome
        }}>
            {children}
        </GlobalContext.Provider>
    )
}