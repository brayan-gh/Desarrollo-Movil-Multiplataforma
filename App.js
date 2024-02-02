import React, { useState } from "react";
const secondaryColor = "#ffffff";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  Image,
} from "react-native";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {
          
        }
        <Image
          source={require("./assets/facebook-logo.png")}
          alignSelf="center"
          style={styles.logo}
        />
       

      </View>

      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          placeholder="Celular o correo electrónico"
          value={email}
          onChangeText={setEmail}
          marginBottom={20}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
        />
        
      </View>
    <View style={styles.button}>
    <Button
        title=""
        titleColor="#ffffff"
        
        onPress={() => {
        }}
      />
      <Text style={styles.textBu}>Iniciar Sesión</Text>
       
    </View>
    
     <View style={styles.TextOv}>
     <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
     </View>
       
      <View style={styles.createAccountButton}> 
      <Button
        title="Crear cuenta"
        onPress={() => {
        }}
        style={styles.createAccountButton}
      />
      <Image
          source={require("./assets/meta-logo.png")}
          alignSelf="center"
          style={styles.logoM}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    height: 100,
    backgroundColor: "linear-gradient(#3b5998, #447b2)",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 60,
    height: 60,
  marginTop: 140,
  },
  textBu:{
    marginTop: -30,
    color: "white",
    fontSize: 20,
  },
  
  logoM: {
    marginTop: 20,
    width: 120,
    height: 50,
  },
  createAccountButton: {
    width: 300,
    height: 40,
    borderRadius: 30,
    borderColor: "#4267b2",
    borderWidth: 2,
    backgroundColor: "#ffffff",
    color: "#4267b2",
    marginTop: 160,
  },
  title: {
    alignSelf:"center",
    marginTop:20
  },
  inputs: {
    alignSelf:"center",
    width: 350,
    marginVertical: 20,
    marginTop:150
  },
  input: {
    borderColor: "#000",
    borderWidth: 0.5,
    height: 53,
    padding: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  button: {
    width: 350,
    height: 45,
    borderRadius: 30,
    borderColor: "#000",
    borderWidth: 0,
    backgroundColor: "#1567d9",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  TextOv:{
    marginTop:30,
  }
});

export default App;
