import { Text, View, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { Produto } from '../../componentes/Produto';

import { estilos } from './estilos';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import { TemaContext } from '../../contexts/TemaContext';
import { useContext } from 'react';
import { AutenticacaoContext } from '../../contexts/AutenticacaoContext';
import { ProdutosContext } from '../../contexts/ProdutosContext';



export default function Resumo({ navigation }) {
  const { temaEscolhido } = useContext(TemaContext)
  const { usuario } = useContext(AutenticacaoContext)
  const estilo = estilos(temaEscolhido)

  const { quantidade, carrinho ,atualizaValorTotal} = useContext(ProdutosContext)

  function atualizaPreco(){
    atualizaValorTotal()
    navigation.navigate('Finalizar')
    }
  return (
    <View style={estilo.container}>
      <StatusBar />
      <View style={estilo.tituloArea}>
        <Text style={estilo.titulo}>Olá {usuario?.nome}</Text>
        <View style={estilo.carrinhoArea}>
          <TouchableOpacity onPress={() => { }}>
            <MaterialCommunityIcons name="shopping-cart" size={30} color="#fff" style={estilo.carrinhoIcon} />
          </TouchableOpacity>
          {quantidade > 0 &&
            <View style={estilo.carrinhoQuantidadeArea}>
              <Text style={estilo.carrinhoQuantidade}>{quantidade}</Text>
            </View>}
          <TouchableOpacity onPress={() => navigation.navigate('Configurações')} style={estilo.iconArea} >
            <MaterialCommunityIcons name="settings" size={30} color="#fff" style={estilo.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={carrinho}
        keyExtractor={item => Math.random()}
        renderItem={({ item }) => <Produto item={item} adicionar={false} />}
        style={estilo.lista}
        showsVerticalScrollIndicator={false}
     
      />
      <TouchableOpacity style={estilo.botao}
      onPress={()=> atualizaPreco()}>
        <Text style={estilo.botaoTexto}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}

