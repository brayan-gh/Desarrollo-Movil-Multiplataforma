import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Feather name="menu" size={24} color="black" />
        <Text style={styles.headerTitle}>Los 2 Pequeños</Text>
      </View>
      <Image
        source={require('./assets/panaderia2.jpg')} 
        style={styles.mainImage}
      />
      <View style={styles.overlayTextContainer}>
          <Text style={styles.overlayText}>SABOR AUTÉNTICO</Text>
        </View>
      <Text style={styles.mainTitle}>LOS 2 PEQUEÑOS</Text>
      <View style={styles.socialButtonsContainer}>
        
        <TouchableOpacity style={styles.socialButton}>
          <Feather name="facebook" size={24} color="black" /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Feather name="instagram" size={24} color="black" /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Feather name="twitter" size={24} color="black" /> 
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Feather name="youtube" size={24} color="black" /> 
        </TouchableOpacity>
       
      </View>
      <View style={styles.infoSection}>
        <TouchableOpacity style={styles.infoButton}>
          <Text style={styles.infoButtonText}>Ponerse En Contacto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoButton}>
          <Text style={styles.infoButtonText}>Horario de apertura</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // ... estilos previos de container
    flex: 1,
    backgroundColor: '#fff5e6'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height: '15%',
    backgroundColor: '#ffcc80', 
  },
  overlayTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 170,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white', 
    textAlign: 'center',
  },
  headerTitle: {
    marginLeft: 43,
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 25,
  },
  mainImage: {
    width: '100%',
    height: 400, 
    resizeMode: 'cover',
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    
  },
  socialButton: {
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    backgroundColor: '#cccccc', 
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  infoSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    marginBottom:130
  },
  infoButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000',
  },
  infoButtonText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;
