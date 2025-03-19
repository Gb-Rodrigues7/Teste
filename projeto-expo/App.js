import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

// função que define o componente
// Retornar o que vai ser renderizado na tela(Template feito com JSX)
export default function App() {
  // lógica do meu componente

  function alerta(){
    alert("É o Tiringa, Pai")
  }

  // retorno com o jsx
  return (
    <View style={styles.container}>
      <Text>Meu projeto GABRIEL</Text>
      <StatusBar style="auto" />


      <Text>{2 + 2}</Text>


      <Button title='Clicar' onPress={alerta}></Button>

    </View>
  );
}

// estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
