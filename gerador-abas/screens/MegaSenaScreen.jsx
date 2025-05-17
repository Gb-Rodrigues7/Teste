import React, { useState } from 'react';
import { View, FlatList, ImageBackground, StyleSheet } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';

const imagemFundo = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8WlBHz_rsZFwNNTextUsIL8NgroEmPfjxBg&s',
};

function gerarJogo() {
  const numeros = new Set();
  while (numeros.size < 6) {
    numeros.add(Math.floor(Math.random() * 60) + 1);
  }
  return Array.from(numeros).sort((a, b) => a - b);
}

export default function MegaSenaScreen() {
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const gerar = () => {
    const novoJogo = gerarJogo();
    setJogosMegaSena([novoJogo, ...jogosMegaSena]);
  };

  const limpar = () => {
    setJogosMegaSena([]);
  };

  return (
    <ImageBackground source={imagemFundo} style={styles.background}>
      <View style={styles.container}>
        <Button mode="contained" onPress={gerar} style={styles.botao}>
          Gerar Jogo da Mega Sena
        </Button>
        <Button mode="contained" onPress={limpar} style={styles.botao}>
  Limpar Jogos
</Button>


        <FlatList
          data={jogosMegaSena}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Card.Content>
                <Text style={styles.texto}>{item.join(' - ')}</Text>
              </Card.Content>
            </Card>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  botao: {
    marginBottom: 10,
  },
  botaoLimpar: {
    marginBottom: 20,
    borderColor: 'white',
  },
  card: {
    marginVertical: 8,
    backgroundColor: '#2ecc71',
  },
  texto: {
    color: 'white',
    fontWeight: 'bold',
  },
});

