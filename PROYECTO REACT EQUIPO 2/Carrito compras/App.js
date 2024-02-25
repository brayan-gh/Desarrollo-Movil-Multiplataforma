import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Feather name="menu" size={24} color="black" margin />
        <Text style={styles.headerTitle}>Los 2 Pequeños</Text>
      </View>
      <View style={styles.cartContainer}>
        <Text style={styles.cartTitle}>Carrito de Compras</Text>

        <View style={styles.productRow}>
          <Image source={require('./assets/pan_dulce.jpg')} style={styles.productImage} />
          <Text style={styles.productName}>Producto 1</Text>
          <Text style={styles.productPrice}>$10.00</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      
        <View style={styles.productRow}>
        <Image source={require('./assets/pan_dulce.jpg')} style={styles.productImage} />
          <Text style={styles.productName}>Producto 2</Text>
          <Text style={styles.productPrice}>$20.00</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.productRow}>
        <Image source={require('./assets/pan_dulce.jpg')} style={styles.productImage} />
          <Text style={styles.productName}>Producto 3</Text>
          <Text style={styles.productPrice}>$15.00</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
       
        <View style={styles.productRow}>
        <Image source={require('./assets/pan_dulce.jpg')} style={styles.productImage} />
          <Text style={styles.productName}>Producto 4</Text>
          <Text style={styles.productPrice}>$15.00</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
       
        <View style={styles.productRow}>
        <Image source={require('./assets/pan_dulce.jpg')} style={styles.productImage} />
          <Text style={styles.productName}>Producto 5</Text>
          <Text style={styles.productPrice}>$15.00</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
       
        <View style={styles.productRow}>
        <Image source={require('./assets/pan_dulce.jpg')} style={styles.productImage} />
          <Text style={styles.productName}>Producto 6</Text>
          <Text style={styles.productPrice}>$15.00</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
       
        <View style={styles.productRow}>
        <Image source={require('./assets/pan_dulce.jpg')} style={styles.productImage} />
          <Text style={styles.productName}>Producto 7</Text>
          <Text style={styles.productPrice}>$25.00</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5e6', 
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    height: '14%',
    backgroundColor: '#ffcc80', 
  },
  headerTitle: {
    marginTop: 15,
    fontSize: 34,
    fontWeight: 'bold',
    marginLeft: 50,
  },
  cartContainer: {
    padding: 10,
    marginLeft: 10,
    marginBottom: 60,
    
  },
  cartTitle: {
    textAlign:'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#e0e0e0',
    borderRadius: 30,
  },
  productImage: {
    width: 64,
    height: 64,
    marginRight: 10,
  },
  productName: {
    flex: 1,
    fontSize: 18,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#ffcc80',
    padding: 15,
    width: 60,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50,
  },
  addButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  }
});

export default App;
