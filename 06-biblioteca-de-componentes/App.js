import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Divider, Button, Text } from 'react-native-paper';

export default function App() {

const Lista =[
  {
    título: "Card 1",
    descricao: "Lorem ipsumLorem ipsue Lorem ipsum Lorem ipsum",
    imagem: "https://i.pinimg.com/474x/98/94/5b/98945b3ad1aa9272e6d6320d7ae30a29.jpg"
  },
  {
    título: "Card 2",
    descricao: "Lorem ipsumLorem ipsue Lorem ipsum Lorem ipsum",
    imagem: "https://i.pinimg.com/474x/98/94/5b/98945b3ad1aa9272e6d6320d7ae30a29.jpg"
  },
  {
    título: "Card 3",
    descricao: "Lorem ipsumLorem ipsue Lorem ipsum Lorem ipsum",
    imagem: "https://i.pinimg.com/474x/98/94/5b/98945b3ad1aa9272e6d6320d7ae30a29.jpg"
  },
  {
    título: "Card 4",
    descricao: "Lorem ipsumLorem ipsue Lorem ipsum Lorem ipsum",
    imagem: "https://i.pinimg.com/474x/98/94/5b/98945b3ad1aa9272e6d6320d7ae30a29.jpg"
  },
]




  // Comentario 1
  // const lista = ["uva", "Maça", "Banana", "Laranja"]
 
 
 
  return (
    <PaperProvider>
      <View style={styles.container}>
          <StatusBar style="auto" />


<Flatlist 
horizontal
  data={lista}
  renderItem={({ item}) => (
    <Card>
      <Card.Content>
        <Title>{item.título}</Title>
        <Paragraph>{item.descricao}</Paragraph>
      </Card.Content>
      <Card.Cover source={{uri: item.imagem}} />
    </Card>
  )}
/>

<Flatlist 
  data={lista}
  renderItem={({ item}) => (
    <Card>
      <Card.Content>
        <Title>{item.título}</Title>
        <Paragraph>{item.descricao}</Paragraph>
      </Card.Content>
      <Card.Cover source={{uri: item.imagem}} />
    </Card>
  )}
/>




{/* Comentario 2 */}
{/* {
  lista.map(
    (fruta) => <Text>(fruta)</Text>
  )
}

<FlatList
  data={lista}
  renderItem={({item}) => <Text>{item}</Text>} 
/>

<FlatList
  data={lista}
  renderItem={({item}) => (
    <View>
      <Text>{item}</Text>
      <Divider/>
    </View>
  )} 
/> */}





{/* Comentario 1 */}
{/* 
            <Button mode='contained' onPress={() => alert("Clicou")}>Clique AQUI</Button>
            <Button mode='conteined-tonal' onPress={() => alert("Clicou")}>Clique AQUI</Button>
            <Button mode='outlined' onPress={() => alert("Clicou")}>Clique AQUI</Button>
            <Button mode='text' onPress={() => alert("Clicou")}>Clique AQUI</Button>
            <Button icon="camera" mode='conteined-tonal' onPress={() => alert("Clicou")}>Clique AQUI</Button>


            <Text>Uva</Text>
            <Divider />
            <Text>Maça</Text>
            <Divider />
            <Text>Banana</Text>
            <Divider />
            <Text>Laranja</Text>
            <Divider />


            <Text variant='titleLarge'> Um texto qualquer</Text>
            <Text variant='headLineLarge'>Um texto qualquer</Text>
            <Text variant='displayLarge'>Um texto qualquer</Text>

            <Card>
              <Card.Content>
                <Title> Título do Card</Title>
                <Paragraph>Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer Um paragrafo qualquer</Paragraph>
              </Card.Content>
              <Card.Cover source={{uri: 'https://i.pinimg.com/236x/9b/62/3d/9b623d45aa887148115efb58fa428b6d.jpg' }}/>
            </Card> */}

      </View>
    </PaperProvider>







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
