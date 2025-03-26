import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Pessoa() {

    const{ dados } = props

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Pessoa</Text>
    <Text>Nome: {dados.nome}</Text>
    <Text>Idade: {dados.idade}</Text>

    <Image
        source={{  uri:dados.imagem }}
        style={{

            height: 200,
            width: 200
        }}
        
    />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        borderWidth: 10,
        padding: 10,
        flex: 1,
        alignItems: center,
        justifyContent: center
    },
    texto: {
        fontSize: 10,
        fontWeight: 600
    }
})