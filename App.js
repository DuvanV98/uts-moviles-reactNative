import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Calculadora from "./src/components/Calculadora.jsx";
//import SumarArray from "./src/components/SumarArray";
import EvaluarArray from './src/components/EvaluarArray.jsx';

import AgregarNumsMayores10 from "./src/components/AggregarNumsArr";
import MostrarDatosMySQL from "./src/components/MostrarDatosMySQL";



export default function App() {
  
  return (
    <View style={estilos.container}>
      <EvaluarArray/>
      <StatusBar style="auto" />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
