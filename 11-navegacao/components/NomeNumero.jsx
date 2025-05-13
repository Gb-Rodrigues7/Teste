import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Card, Text, Button } from 'react-native-paper'

export default function NomeNumero() {

    const [nome, setNome] = useState('??????')
    let numero = '?????'

    
    function mostrarNomeNumero(){
        nome = "Lucas"
        numero = "122"
        console.log(nome)
        console.log(numero)
    }

    function alterar() {
        setNome('João')
    }

  return (
    <View>
      <Card>
        <Card.Content>
            <CardTitle.Title title="Componente NomeNumero"/>
            <Text variant='displayMedium'>Nome: {nome}</Text>
            <Text variant='displayMedium'>Número: {numero}</Text>
        </Card.Content>
        <Card.Actions>
            <Button onPress={mostrarNomeNumero}>Mostrar</Button>
            <Button onPress={alterar}>alterar</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})