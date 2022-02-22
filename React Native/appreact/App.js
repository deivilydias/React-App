import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MeuComponente from './MeuComponente';

import meucomponente from './MeuComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu primeiro app react</Text>
      <StatusBar style="light"/>
    <ScrollView>
      <MeuComponente/>
      <MeuComponente/>
      <MeuComponente/>
      <MeuComponente/>
      <MeuComponente/>
      <MeuComponente/>
      <MeuComponente/>
      <MeuComponente/>
      <MeuComponente/>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF00FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold' ,
    fontSize: 25 ,
    paddingTop: 70,
    marginBottom: 25, 
  
  },
  titulo: {
    color: 'black' ,
    fontWeight: 'bold' ,
    fontSize: 25,

  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
  }
});
