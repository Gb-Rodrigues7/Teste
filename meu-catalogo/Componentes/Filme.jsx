import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const Filme = ({ nome, ano, diretor, tipo, capa }) => {
  return (
    <View style={styles.Container}>
      <Image source={{ uri: capa }} style={styles.Capa} />
      <Text style={styles.Nome}>{nome}</Text>
      <Text style={styles.Detalhes}>Ano: {ano}</Text>
      <Text style={styles.Detalhes}>Diretor: {diretor}</Text>
      <Text style={styles.Detalhes}>Gênero: {tipo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: 'green',
    shadowOffset: { width: 4, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 3,
  },
  Capa: {
    width: '100%',
    height: 220,
    borderRadius: 12,
  },
  Nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#2f2f2f',
  },
  Detalhes: {
    fontSize: 14,
    color: '#555',
  },
});

export default Filme;