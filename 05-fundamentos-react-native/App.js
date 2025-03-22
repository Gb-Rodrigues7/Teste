import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import SegundoComponente from './componentes/SegundoComponente';
import TerceiroComponente from './componentes/terceiroComponente';
import JavaScriptCompomente from './componentes/JavaScriptCompomente';

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
