import { createContext, useState, useEffect } from "react";
import { pegarProdutos, salvarProduto } from "../servicos/requisicoes";

export const ProdutosContext = createContext({})

export function ProdutosProvider({ children }) {
    const [quantidade, setQuantidade] = useState(0)
    const [carrinho, setCarrinho] = useState([])
    const [ultimosVistos, setUltimosVistos] = useState([])
    const [total, setTotal] = useState([])

    useEffect(() => {

        carregaProdutos()
    }, [])


    async function carregaProdutos() {
        let resultado = 0
        resultado = await pegarProdutos()
        setCarrinho(resultado)
        setQuantidade(resultado.length)
        console.log(quantidade)


    }

 async function  atualizaValorTotal(){
        let novoTotal = 0
        await carrinho.forEach((item) => {
            novoTotal += item.preco
            console.log(novoTotal)
 
            setTotal(novoTotal)
        })
    }

    async function viuProduto(produto) {
        setQuantidade(quantidade + 1)
        console.log(quantidade)
        const resultado = await salvarProduto(produto)

        let novoCarrinho = carrinho
        novoCarrinho.push(resultado)
        setCarrinho(novoCarrinho)

        let novoUltimosVistos = new Set(ultimosVistos) //A função Set adiciona na lista somente o que não existe, não repete um item mais de uma vez
        novoUltimosVistos.add(produto)
        setUltimosVistos([...novoUltimosVistos])
    }

    return (
        <ProdutosContext.Provider value={{
            quantidade,
            carrinho,
            setCarrinho,
            ultimosVistos,
            viuProduto,
            total,
            setQuantidade,
            atualizaValorTotal
        }}>
            {children}
        </ProdutosContext.Provider>
    )
}