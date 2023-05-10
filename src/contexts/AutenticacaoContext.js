import { createContext, useState } from "react";

export const AutenticacaoContext = createContext({})

export function AutenticacaoProvider({ children }) {
    const [usuario, setUsuario] = useState({})

    function login(email, senha) {
        if (email == 'rene@gmail.com' && senha == 'rene0130') {
            setUsuario(
                {
                    nome: 'Renê',
                    email: email,
                    endereco: 'Rua das pitangueiras',
                    telefone: '(11) 12345-6548'
                }
            )
            return 'ok'
        } else {
            return 'Email ou senha incorretos'
        }
    }
    return (
        <AutenticacaoContext.Provider value={{
            usuario,
            login
        }}>
            {children}
        </AutenticacaoContext.Provider>
    )
}