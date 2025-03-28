import React from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import PrimeiroComponente from "./componentes/PrimeiroComponente";
import JavascriptComponente from "./componentes/JavascriptComponente";
import Perfil from "./componentes/Perfil";
import ListaComponente from "./componentes/ListaComponente";
import Pessoa from "./componentes/Pessoa";

export default function App() {
  return (
      <scrollView>
    <View style={styles.container}>

      <StatusBar style="auto" />

      <PrimeiroComponente />
      <JavascriptComponente />
      <Perfil

nome= "Gabriel"
idade= {23}
email= "gabriel@gmail.com"
telefone="61 9 0000-0006"
/>

      <Perfil
        nome = "Felipe"
        idade = {17}
        email = "felipe@gmail.com"
        telefone = "61 9 9983-7827"
        />

    <Pessoa 
    dados ={(
      nome = "Neymar",
      idade = 33,
      Imagem = "https://i.pinimg.com/736x/65/92/d2/6592d22f05d29398784337cd02a37e26.jpg"
    )}
    
    />


    return{
      <ScrollView>
        <View style={styles.container}>
          <statusBar style="auto"/>

          {
            listaJogadores.map(
              (jogador) => {
                return (
                  <Pessoa
                  dados={jogador}
                  />
                )
              }
            )
          }
        </View>
      </ScrollView>
    }

    </View>
    </scrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
