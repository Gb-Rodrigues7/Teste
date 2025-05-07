import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Atleta(props) {
    const {nome, idade, imagens} = props


  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Atleta</Text>
      <Text style={styles.texto}>Nome: {nome}</Text>
      <Text style={styles.texto}>Idade : {idade}</Text>

    <image
        source={{
            uri: imagens
        }}
        style= {{
            height:300,
            width: 300
        }}
    />


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yelow',
      borderwidth: 15,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    texto: {
      fontSize: 20,
      fontWeight: 600
    }
})