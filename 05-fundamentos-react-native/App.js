import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import SegundoComponente from './componentes/SegundoComponente';
import TerceiroComponente from './componentes/terceiroComponente';
import JavaScriptCompomente from './componentes/JavaScriptCompomente';
import Perfil from './componentes/Perfil';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    
      <PrimeiroComponente/>
      <Text/>

      <SegundoComponente/>

      <Text/>

      <TerceiroComponente/>

      <Text/>

      <JavaScriptCompomente/>

      <Text/>
      
      <Perfil
        nome = "Gabriel"
        idade = {20}
        email = "gabriel@gmail.com"
      
      />
      <Perfil
        nome = "Pedro"
        idade = {26}
        email = "Pedro@gmail.com"
      
      />
      <Perfil
        nome = "Cabral"
        idade = {52}
        email = "Cabral@gmail.com"
      
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
