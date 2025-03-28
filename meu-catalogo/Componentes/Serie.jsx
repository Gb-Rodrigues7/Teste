import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const Serie = ({ nome, ano, diretor, temporadas, capa }) => {
  return (
    <View style={styles.Container}>
      <Image source={{ uri: capa }} style={styles.Capa} />
      <Text style={styles.Nome}>{nome}</Text>
      <Text style={styles.serieDetalhes}>Ano: {ano}</Text>
      <Text style={styles.serieDetalhes}>Diretor: {diretor}</Text>
      <Text style={styles.Detalhes}>Temporadas: {temporadas}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: 'blue',
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
    color: '#2f2f2f', // Cor de texto mais escura
  },
  Detalhes: {
    fontSize: 14,
    color: '#555',
  },
});

export default Serie;