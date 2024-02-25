import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menuIconContainer}>
        <Text style={styles.header}>Los 2 Pequeños</Text>
      </View>
      <View style={styles.loginForm}>
        <Text style={styles.formTitle}>LOGIN</Text>
        
        <Image
          source={require('./assets/logoLogin.png')} 
          style={styles.userIcon}
        />
         <Text style={styles.sub}>Usuario</Text>
        <TextInput style={styles.input} placeholder="Usuario" />
        <Text style={styles.sub}>Password</Text>
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acceder</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPasswordText}>¿Olvidaste Tu Contraseña?</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f4f7',
  },
  sub:{
    marginBottom: 10,
    marginTop: 20,
    fontSize: 15,
  },
  menuIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    width: 24,
    height: 24,
    
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
   
  },
  loginForm: {
    width: '90%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
   
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  
  },
  userIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
    
  },
  input: {
    width: '100%',
    height: 60,
    padding: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 30,
    marginTop: 10,

  },
  button: {
    width: '100%',
    backgroundColor: '#b6744b', 
    padding: 20,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 30,
 
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',

  },
  forgotPasswordText: {
    marginTop: 20,
    color: '#a52a2a', 

  }
});

export default App;
