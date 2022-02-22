import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function MeuComponente () {
    return (
        <View style={styles.card}> 
        <Text style={styles.titulo}> React Native</Text>
        <Text style={styles.subtitulo}> Eu produzi meu primeiro app em react</Text>
      </View>
    )
}
const styles = StyleSheet.create({
    titulo: {
      color: 'black' ,
      fontWeight: 'bold' ,
      fontSize: 25,
  
    },
    card: {
      backgroundColor: '#fff',
      padding: 30,
      borderRadius: 15,
      marginVertical: 12,
    }
  });
  