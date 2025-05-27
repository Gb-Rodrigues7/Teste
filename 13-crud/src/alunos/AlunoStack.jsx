import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AlunoLista from './AlunoLista'
import AlunoForm from './AlunoForm'

const Stack = createStackNavigator
export default function AlunoStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen>

        </Stack.Screen>

    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})