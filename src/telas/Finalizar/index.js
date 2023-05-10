import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Produto } from '../../componentes/Produto';

import { estilos } from './estilos';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { TemaContext } from '../../contexts/TemaContext';
import { useContext } from 'react';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { ProdutosContext } from '../../contexts/ProdutosContext';
import { apagarProdutosDoCarrinho, pegarProdutos } from '../../servicos/requisicoes';



export default function Finalizar({ navigation }) {
  const { temaEscolhido } = useContext(TemaContext)
  const { usuario } = useContext(AutenticacaoContext)

  const estilo = estilos(temaEscolhido)

  const { quantidade, total, carrinho, setCarrinho, setQuantidade } = useContext(ProdutosContext)

  async function finalizaCompra() {
    await carrinho.forEach(async (item) => {
      await apagarProdutosDoCarrinho(item.id)
    })
    let resultado = 0
    resultado = await pegarProdutos()
    await setCarrinho(resultado)
    await setQuantidade(resultado.length)

    console.log('carrinho.lenght' + resultado.lenght)
    navigation.navigate('Principal')
  }

  return (
    <View style={estilo.container}>
      <StatusBar />
      <View>
        <View style={estilo.cardDetalhesEntrega}>
          <Text style={estilo.titulo}>Informações de entrega</Text>
          <Text style={estilo.texto}>Nome: {usuario.nome}</Text>
          <Text style={estilo.texto}>Endereco: {usuario.endereco}</Text>
          <Text style={estilo.texto}>E-Mail: {usuario.email}</Text>
          <Text style={estilo.texto}>Telefone: {usuario.telefone}</Text>
        </View>

        <View style={estilo.cardValorQuantidade}>
          <Text style={estilo.texto}>Quantidade: {quantidade}</Text>
          <Text style={estilo.texto}>Preço total: {total}</Text>
        </View>
      </View>

      <TouchableOpacity style={estilo.botao}
        onPress={() => finalizaCompra()}>
        <Text style={estilo.botaoTexto}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}

