import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

const App = () => {


  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.header}>Los 2 Pequeños</Text>
        <View style={styles.form}>
        <Text style={styles.titulo}>EDITAR PERFIL</Text>
        <Text style={styles.Sub}>Nombre:</Text>
          <TextInput style={styles.input} placeholder="Nombre del cliente" />
          <Text style={styles.Sub}>Apellido Paterno:</Text>
          <TextInput style={styles.input} placeholder="Apellido Paterno" />
          <Text style={styles.Sub}>Apellido Materno:</Text>
          <TextInput style={styles.input} placeholder="Apellido Materno" />
          <Text style={styles.Sub}>Teléfono:</Text>
          <TextInput style={styles.input} placeholder="Teléfono" keyboardType="phone-pad" />
          <Text style={styles.Sub}>Correo Electrónico:</Text>
          <TextInput style={styles.input} placeholder="Correo Electrónico" keyboardType="email-address" />

          <Text style={styles.label}>Imagen De Usuario:</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Elegir archivo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonA}>
            <Text style={styles.buttonText}>GUARDAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  titulo:
  {
    fontWeight: 'bold',
    textAlign:'center',
    fontSize:24
  },
  buttonA:{
    marginTop: 20,
    backgroundColor: '#b6744b',
    padding: 23,
    borderRadius: 30,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    marginTop: 70,
  },
  Sub:{
    marginBottom: 10,
    marginTop: 15,
    textAlign:'center',
  },
  form: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    height: 40,
    backgroundColor: '#e8e8e8',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 30,
    fontSize: 16,
    textAlign:'center',
  },
  label: {
    color: '#333',
    marginBottom: 18,
    textAlign:'center',
  },
  button: {
    backgroundColor: '#3498db',
    padding:10,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
});

export default App;
