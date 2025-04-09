import { StyleSheet, View } from 'react-native';
import {Text, Card, Title,Paragraph} from 'react-native-paper';
import React from 'react';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant='headlineLarge' style={{ textAlign: 'center'}}>Tela de Início</Text>

        <Card style={{ width: '98%' }}>
            <Card.Content>
                <Title>Um título</Title>
                <Paragraph> Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum 
                Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum 
                </Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg"}}/>
        </Card>

        <Card style={{ width: '98%' }}>
            <Card.Content>
                <Title>Um título</Title>
                <Paragraph> Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum 
                Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum  Lorem ipsum 
                </Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: "https://i.pinimg.com/236x/d7/e3/66/d7e36650f858c03c2366721ba3d01ce3.jpg"}}/>
        </Card>

    




    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'fff',
        flex: 1,
        alignItems: 'center',
        paddingTop: 10
    }
})