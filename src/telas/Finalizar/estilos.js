import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';

export const estilos = (tema) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: tema.fundo,
      alignItems: 'stretch',
      justifyContent: 'space-between',

    },
    tituloArea: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      paddingTop: StatusBar.currentHeight,
      marginBottom: 16,
    },
    titulo: {
      fontSize: 20,
      fontWeight: 'bold',
      color: tema.titulo,
      marginBottom: 10
    },
    texto: {
      fontSize: 16,
      fontWeight: 'normal',
      color: tema.texto,
    },
    lista: {
      flex: 1,
      width: '100%',
    },
    ultimosVistos: {
      marginBottom: 16,
      paddingVertical: 16,
      backgroundColor: tema.ultimosVistos,
    },
    tituloUltimosVistos: {
      fontSize: 18,
      fontWeight: 'bold',
      color: tema.titulo,
      marginHorizontal: 16,
      marginBottom: 8,
    },
    carrinhoArea: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
    },
    carrinhoIcon: {
      fontSize: 30,
      fontWeight: 'bold',
      color: tema.titulo,
    },
    carrinhoQuantidadeArea: {
      backgroundColor: 'red',
      borderRadius: 10,
      width: 20,
      height: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    carrinhoQuantidade: {
      fontSize: 12,
      fontWeight: 'bold',
      color: "#fff",
    },
    iconArea: {
      marginLeft: 16,
    },
    icon: {
      color: tema.texto,
      fontSize: 30,
    },
    botao: {
      margin: 16,
      marginBottom: 32,
      paddingVertical: 16,
      borderRadius: 10,
      backgroundColor: tema.botao,

    },
    botaoTexto: {
      fontSize: 18,
      fontWeight: 'bold',
      color: tema.preto,
      textAlign: 'center'

    },
    cardDetalhesEntrega: {
      backgroundColor: tema.fundoInformacoesEntrega,
      margin: 16,
      padding: 16,
      borderRadius: 4,
    },
     cardValorQuantidade: {
      marginLeft: 16,
      marginTop: 8,
      borderRadius: 4,
       
    }
  })
}