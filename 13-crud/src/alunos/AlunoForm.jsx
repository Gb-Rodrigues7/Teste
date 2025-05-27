import { StyleSheet, View } from 'react-native'
import React from 'react'
import {Text, TextInput} from 'react-native-paper'


export default function AlunoForm() {

    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [email, setEmail] = useState("")
    const [cpf, setCPF] = useState("")
    const [dataNascimento, setDataNascimento] = useState("")

    function salvar() {
        let aluno={
            nome,
            cpf,
            email,
            telefone,
            dataNascimento
        }
    }

  return (
    <View style={styles.container}>
      <Text variant='titleLarge'>Informe os dados:</Text>

      <TextInput
        stles={styles.input}
        mode='outlined'
        label="Nome"
        placeholder='informe o nome'
        value={nome}
        onChangeText={setNome}   
      />

      <TextInput
        stles={styles.input}
        mode='outlined'
        label="CPF"
        placeholder='informe o nome'
        value={nome}
        onChangeText={setCPF}
        keyboardType='decimal-pad'   
      />

      <TextInput
        stles={styles.input}
        mode='outlined'
        label="E-mail"
        placeholder='informe o E-mail'
        value={nome}
        onChangeText={setEmail}   
      />

      <TextInput
        stles={styles.input}
        mode='outlined'
        label="Telefone"
        placeholder='informe o Telefone'
        value={nome}
        onChangeText={setTelefone}
        keyboardType='numeric'   
      />

      <TextInput
        stles={styles.input}
        mode='outlined'
        label="Data de Nascimento"
        placeholder='informe a data de nascimento'
        value={nome}
        onChangeText={setDataNascimento}
        keyboardType='numeric'      
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10
    },
    input: {
        width: '90%',
        marginTop: 10
    }
})