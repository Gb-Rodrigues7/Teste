// screens/EscudoScreen.js
import { StyleSheet, View, Image } from 'react-native';
import { Text, Card, Title } from 'react-native-paper';
import React from 'react';

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium" style={styles.title}>Clube de Regatas do Flamengo</Text>
      <Image
        source={{ uri: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg" }}
        style={styles.escudo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C8102E',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  escudo: {
    width: 200,
    height: 200,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#000',
  },
});
