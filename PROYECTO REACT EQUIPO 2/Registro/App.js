import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
const App = () => {
  const [selectedValue, setSelectedValue] = React.useState("default");
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Los 2 Pequeños</Text>
      <View style={styles.registrationForm}>
        <Text style={styles.formTitle}>REGISTRO</Text>
        <View style={styles.imageContainer}>
  <Image
    style={styles.image}
    source={require("./assets/logoLogin.png")}
  />
</View>
        <View style={styles.formRow}>
          <View style={styles.column}>
         
          <Text style={styles.formSub}>Nombre del cliente</Text>
            <TextInput style={styles.input} placeholder="Nombre del cliente" />
            <Text style={styles.formSub}>Apellido Paterno</Text>
            <TextInput style={styles.input} placeholder="Apellido Paterno" />
            <Text style={styles.formSub}>Apellido Materno</Text>
            <TextInput style={styles.input} placeholder="Apellido Materno" />
            <Text style={styles.formSub}>Correo Electrónico</Text>
            <TextInput style={styles.input} placeholder="Correo Electrónico" keyboardType="email-address" />
          </View>
          
          <View style={styles.column}>
            <Text style={styles.formSub}>Nombre usuario</Text>
            <TextInput style={styles.input} placeholder="Usuario" />
            <Text style={styles.formSub}>Selecciona tu pregunta</Text>
            <View style={styles.pickerContainer}>
            <Picker
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Pregunta 1" value="default" />
        <Picker.Item label="Pregunta 2" value="default" />
        <Picker.Item label="Pregunta 3" value="default" />
        <Picker.Item label="Pregunta 4" value="default" />
        <Picker.Item label="Pregunta 1" value="default" />
        {/* Agregar más elementos aquí */}
      </Picker>
          </View>
          <Text style={styles.formSub}>Respuesta pregunta</Text>
        <TextInput style={styles.input} placeholder="Respuesta a la Pregunta" />
        <Text style={styles.formSub}>Ingresa contraseña</Text>
        <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
        
        
        </View>
        
    </View>
    <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
    
      
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop:40,
    fontSize: 44,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formSub:{
    marginBottom: 10,
    textAlign: 'center',
  },
  registrationForm: {
    width: '90%',
    height: '73%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  formTitle: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    backgroundColor: '#e8e8e8',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 30,
    marginBottom: 20,
    textAlign:'center',
  },
  pickerContainer: {
    backgroundColor: '#e8e8e8',
    borderRadius: 4,
    marginBottom: 10,
    borderRadius: 30,
  
  },
  picker: {
    height: 50,
  },
  button: {
    backgroundColor: '#b6744b',
    paddingVertical: 10,
    borderRadius: 30,
    marginTop: 10,
    height: 50,
  },
  buttonText: {
    marginTop: 5,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
    width: '48%', // Ajustar el porcentaje según sea necesario para el espaciado
  },
  selectorContainer: {
    width: '100%', // Ajustar según sea necesario
    // ... otros estilos que necesites para el contenedor del selector
  },
  selector: {
    width: '100%', // Ajustar según sea necesario
    // ... otros estilos que necesites para el selector
  },
  // ... otros estilos
});

export default App;
