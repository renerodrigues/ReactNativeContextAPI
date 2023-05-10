import api from "./api"

export async function salvarProduto(produto){
    try {
        const resultado = await api.post('/produtos', produto)
        return resultado.data;
    } catch (error) {
       console.log(error) 
       return {}
    }
}

export async function pegarProdutos( ){
    try {
        const resultado = await api.get('/produtos')
        return resultado.data;
    } catch (error) {
       console.log(error) 
       return []
    }
}

export async function apagarProdutosDoCarrinho(id ){
    try {
        await api.delete(`/produtos/${id}`)
        return "ok";
    } catch (error) {
       console.log(error) 
       return "Erro"
    }
}