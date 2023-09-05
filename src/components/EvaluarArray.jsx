import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ToastAndroid, Button } from 'react-native';
//import Sound from 'react-native-sound';

const EvaluarArray = () => {

  let arrInicial = [3, 9, 11, 7, 33, 18, 22, 2, 9, 20];
  const [arrMayor, setArrMayor] = useState([]);
  const [nombre, setNombre] = useState("");
  const [mostrarResultado, setMostrarResultado] = useState(false);

  useEffect(() => {
    //ESTO SE EJECUTA UNA SOLA VEZ
    //ToastAndroid.show("se cargo la aplicacion corectamente", ToastAndroid.SHORT)
  }, [])

  const validarArrayMayor = async () => {

    /*const response = await fetch("http://10.11.8.75:4000");
    const rta = await response.json();
    console.log(rta);*/
  
    try {
      const response = await fetch("http://192.168.23.71:4000/api/clientes", {
        cache: 'no-cache',
        //method: "GET",
        //body: JSON.stringify(documento),
        //headers: { "Content-Type": "application/json" }
      });

      const rta = await response.json();
      console.log(rta);

      setNombre(rta[0].nombre)
      
    } catch (error) {
      console.log("error =>",error)
    }

    arrInicial.forEach((n) => {
      if (n[i] > numMayor) {
        numMayor = n[i];
        arrMayor.push(n[i])
      }
    })

    setMostrarResultado(true);
    //ToastAndroid.show('Se ha agregado el numero '+num, ToastAndroid.SHORT);
  }

  const estilos = StyleSheet.create({
    inputsTexto: {
      height: 40,
      width: 80,
      margin: 10,
      borderWidth: 1,
      padding: 10,
      borderColor: 'gray',
      borderWidth: 3,
    },
  });

  return (
    <View >
      <Text>VALIDAR ARRAY, MUESTRA CUAL ES EL NUMERO MAYOR</Text>
      <Button onPress={validarArrayMayor} title="ENCONTRAR" color="#FF0000" />
      {mostrarResultado && (<Text>El numero mayor es: {arrMayor}</Text>)}
      <Text>{nombre}</Text>
    </View>
  );
};

export default EvaluarArray;