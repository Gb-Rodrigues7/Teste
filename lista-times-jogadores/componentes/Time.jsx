import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { Card, Text } from 'react-native-paper';
import Jogadores from './Jogadores';

export default function Time(props) {
  const { nome, anoFundacao, mascote, imagem, jogadores } = props;

  return (
    <Card style={{ margin: 10 }}>
      <Card.Title title={nome} subtitle={anoFundacao} />
      <Card.Content>
        <Text>{mascote}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: imagem }} />
      <Card.Actions> 
      <FlatList
      horizontal
        data={jogadores} // Corrigido para jogadores
        keyExtractor={(item) => item.numero.toString()} // Chave única para cada jogador
        renderItem={({ item }) => (
            <Jogadores
            nome={item.nome}
            imagem={item.imagem}
            numero={item.numero}
            />
        )}
        />
        </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({});
