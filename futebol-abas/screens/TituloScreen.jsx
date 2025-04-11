// screens/TituloScreen.js
import { StyleSheet, View } from 'react-native';
import { List, Text } from 'react-native-paper';
import React, { useState } from 'react';

const titulos = [
  {
    nome: "Campeonato Brasileiro",
    anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020]
  },
  {
    nome: "Copa Libertadores da América",
    anos: [1981, 2019, 2022]
  },
  {
    nome: "Copa do Brasil",
    anos: [1990, 2006, 2013, 2022, 2024]
  },
  {
    nome: "Supercopa do Brasil",
    anos: [2020, 2021, 2025]
  },
];

export default function TituloScreen() {
  const [expanded, setExpanded] = useState(null);

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>Títulos do Flamengo</Text>
      {titulos.map((titulo, index) => (
        <List.Accordion
          key={index}
          title={titulo.nome}
          expanded={expanded === index}
          onPress={() => setExpanded(expanded === index ? null : index)}
          left={props => <List.Icon {...props} icon="trophy" />}
          titleStyle={{ fontWeight: 'bold' }}
        >
          <List.Item title={titulo.anos.join(', ')} />
        </List.Accordion>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#C8102E',
    fontWeight: 'bold',
  },
});
