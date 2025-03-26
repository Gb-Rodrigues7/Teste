import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaComponente() {

    const lista = ["uva", "Maçã", "Banana", "Laranja" ]
  return (
    <View style={styles.container}>
        {lista.map((fruta) => <Text style={styles.texto}>(fruta)</Text>)}

        {lista.map(
            (fruta) => {
                return (
                    <View>
                        <Text style={styles.texto}>(fruta)</Text>
                    </View>    
                )
            }
        )}

        {
            lista.map (
                (fruta) => {

                    return (
                        <View>
                            <Text>(fruta)</Text>
                        </View>
                    )
                }
            )
        }

    </View>
  )
}

const styles = StyleSheet.create({})