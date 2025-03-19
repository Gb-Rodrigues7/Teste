import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView, } from 'react-native';

export default function App() {

  function alerta(){
    alert("Gol do RONALDINHOOOO!!!")
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text></Text>
      <Text></Text>

      <Text style={styles.name}>Ronaldinho Gaucho</Text>

      <Text></Text>

      <Text style={styles.description}>
      Ronaldinho Gaúcho, nascido em 1980 em Porto Alegre, é um dos maiores ícones do futebol mundial. Começou sua carreira no Grêmio, e logo se destacou no Paris Saint-Germain, mas foi no Barcelona onde alcançou seu auge. Com o clube catalão, conquistou títulos importantes, como a Liga dos Campeões de 2006 e o Campeonato Espanhol, além de ganhar o Ballon d'Or em 2005.
      </Text>

    <Text></Text>

      <Text style={styles.description}>
      Pela seleção brasileira, Ronaldinho brilhou ao conquistar a Copa do Mundo de 2002, a Copa América de 1999 e a Copa das Confederações de 2005. Sua habilidade inconfundível com a bola, seus dribles desconcertantes e sua visão de jogo única o tornaram uma lenda do esporte, sendo amplamente reconhecido por sua criatividade e estilo de jogo alegre.
      </Text>

    <Text></Text>

      <Text style={styles.description}>
      Após sua passagem por clubes como Milan e Flamengo, Ronaldinho se aposentou, mas sua contribuição para o futebol permanece imortalizada. Sua trajetória não foi apenas marcada por vitórias, mas também por sua personalidade carismática, que encantou fãs ao redor do mundo, fazendo dele uma verdadeira lenda dentro e fora dos campos.
      </Text>

    <Text></Text>
    <Button title='Gol' onPress={alerta}></Button>
    <Text></Text>

      <StatusBar style="auto" />

    <Image 
        source={{
          uri: "https://i.pinimg.com/236x/80/39/be/8039be00441927f8281022942f47cdb1.jpg"
        }}
        style = {{
          height: 350,
          width: 300
        }}
        />
        <Text></Text>
        <Text></Text>
    <Image 
        source={{
          uri:'https://i.pinimg.com/474x/8a/81/8f/8a818fc8f542e67f2916b2de226e8e32.jpg'
        }}
        style = {{
          height: 500,
          width: 300
        }}
      />
        <Text></Text>
        <Text></Text>
    <Image 
        source={{
          uri:'https://i.pinimg.com/474x/9a/12/af/9a12afd0f2b54c6cfc0c69f9ea866cd6.jpg'
        }}
        style = {{
          height: 450,
          width: 300
        }}
        />
        <Text></Text>
        <Text></Text>
    <Image 
        source={{
          uri:'https://i.pinimg.com/236x/22/2b/67/222b67e6a519a19048a7f29fe451d864.jpg'
        }}
        style = {{
          height: 350,
          width: 300
        }}
      />
      <Text></Text>
      <Text></Text>
    <Image 
        source={{
          uri:'https://i.pinimg.com/236x/06/a6/69/06a669958ae3a5872a8b9d91baf59d27.jpg'
        }}
        style = {{
          height: 550,
          width: 300
        }}
        />
        </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F5DEB3',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  name: {
    fontSize: 30,  // Fonte maior para o nome do jogador
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: 'gray',
  },
});
