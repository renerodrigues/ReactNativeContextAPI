import { createContext, useState, useEffect } from "react";
import { escuro, claro } from "../estilosGlobais";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const TemaContext = createContext({})

export function TemaProvider({ children }) {
    const [temaAtual, setTemaAtual] = useState('escuro')
    const temas = {
        'escuro': escuro,
        'claro': claro
    }
    async function salvaTemaNoDispositivo(tema) {
        const temaSalvo = tema
        await AsyncStorage.setItem('@tema', temaSalvo)
        setTemaAtual(temaSalvo)
    }
    useEffect(() => {
        async function buscaTema() {
            const temaSalvo = await AsyncStorage.getItem('@tema')
            if (temaSalvo) {
                setTemaAtual(temaSalvo)
            }
        }
        buscaTema()
    }, [])

    return (
        <TemaContext.Provider value={{
            temaAtual,
            setTemaAtual,
            temaEscolhido: temas[temaAtual],
            salvaTemaNoDispositivo
        }}>
            {children}
        </TemaContext.Provider>
    )
}