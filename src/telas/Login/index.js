import { useContext, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { TemaContext } from "../../contexts/TemaContext";
import { estilos } from "./estilos";
import { AutenticacaoContext } from "../../contexts/AutenticacaoContext";


export default function Login({ navigation }) {
  const [email, setEmail] = useState("rene@gmail.com");
  const [senha, setSenha] = useState("rene0130");
  const { temaEscolhido } = useContext(TemaContext)

  const estilo = estilos(temaEscolhido)

  const { login } = useContext(AutenticacaoContext)

  function logandoNoSistema() {
    const resultado = login(email, senha)
    resultado == 'ok' ? navigation.navigate('Principal') : Alert.alert(resultado)
  }

  return (
    <View style={estilo.container}>
      <StatusBar />
      <Text style={estilo.titulo}>Login  </Text>

      <View style={estilo.inputArea}>
        <TextInput
          style={estilo.input}
          placeholder="Email"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={estilo.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity
        style={estilo.botao}
        onPress={() => logandoNoSistema()}
      >
        <Text style={estilo.botaoTexto}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

