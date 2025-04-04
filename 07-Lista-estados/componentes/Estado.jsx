import { StyleSheet,FlatList} from 'react-native'
import React from 'react';
import {Card, Text} from 'react-native-paper';
import Municipio from './Municipio';


export default function Estado(props) {

    const {nome, sigla, descricao, imagem, municipios} = props

  return (
    <Card styles={{ margin: 10}}>
        <Card.title title = {nome} subtitle= {sigla}/>
        <Card.Content>
            <Text>{descricao}</Text>
        </Card.Content>
        <Card.Cover source={{ uri: imagem}}/>
        <Card.Actions>
            <Text>Teste</Text>
        </Card.Actions>
        <FlatList
            data={municipios}
            renderItem = {({ item }) =>
                <Municipio
                    nome = {item.nome}
                    imagem = {item. imagem}
                />
            }
        />

  </Card>

  )
}

const styles = StyleSheet.create({})