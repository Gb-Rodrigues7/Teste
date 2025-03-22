import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function JavaScriptCompomente() {
    
    const nome = "gabriel"
    const idade = 20


    function checkMaiorIdade() {
        if(idade >= 18){
            return "Maior de Idade"
        } else {
            return "Menor de Idade"
        }
    }

    function alerta() {
        alert("Clicou no botão!!!!")
    }


  return (
    <View>
      <Text>JavaScriptCompomente</Text>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Idade + 40 = {idade + 40}</Text>
      <Text>É maior de idade? {checkMaiorIdade()}</Text>
      {/* checagem direto no template, sem puxar o javascript, idade é maior ou igual a 18? se sim (""), se não : ("") */}
      <Text>check 18+ : {idade >= 18 ? "18+" : "18-"}</Text> 
      <Text/>
       <Button title = 'Clicar' onPress={alerta}></Button>

    </View>
  )
}

const styles = StyleSheet.create({})