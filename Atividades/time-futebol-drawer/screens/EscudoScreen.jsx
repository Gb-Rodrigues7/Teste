import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Card, Title, Paragraph } from 'react-native-paper';

export default function EscudoScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.content}>
          <Title style={styles.title}>Clube de Regatas do Flamengo</Title>
          <Image
            source={{ uri: 'https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg' }}
            style={styles.image}
          />
          <Paragraph style={styles.text}>Fundado em 15 de novembro de 1895</Paragraph>
          <Paragraph style={styles.text}>Estádio: Maracanã</Paragraph>
          <Paragraph style={styles.text}>Mascote: Urubu</Paragraph>
          <Paragraph style={styles.text}>Cores: Vermelho e Preto</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5', padding: 20 },
  card: { width: '100%', borderRadius: 16, elevation: 4 },
  content: { alignItems: 'center' },
  image: { width: 150, height: 150, marginVertical: 10 },
  text: { fontSize: 16, textAlign: 'center', marginVertical: 2 },
  title: { fontSize: 20, marginBottom: 10, textAlign: 'center', fontWeight: 'bold', color: '#b00000' }
});
