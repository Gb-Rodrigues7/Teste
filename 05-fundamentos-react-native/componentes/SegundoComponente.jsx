import React from "react";
import {Text, StyleSheet} from 'react-native'

export default function SegundoComponente() {

    return <Text style = {styles.textoPequeno}>Segundo Componente</Text>
}

const styles = StyleSheet.create({
    textoPequeno: {
        fontSize: 10,
        fontWeight: 600,
    }
})