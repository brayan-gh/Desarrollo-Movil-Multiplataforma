import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Feather name="menu" size={24} color="black"  style={styles.menu}/>
        <Text style={styles.headerTitle}>Los 2 Pequeños</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Buscar..." />
        <Feather name="search" size={24} color="black" />
        <Picker
          style={styles.picker}
        >
          <Picker.Item label="Todos" value="todos" />
        </Picker>
      </View>
      <View style={styles.productContainer}>
      
        <View style={styles.productCard}>
          <Image 
            source={require('./assets/pan_dulce.jpg')}
            style={styles.productImage}
          />
          <Text style={styles.productName}>Bolillo</Text>
          <Text style={styles.productDetail}>Tipo De Harina: Harina Integral</Text>
          <Text style={styles.productPrice}>Precio: 6 pesos</Text>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
        {/* Product 2 */}
        <View style={styles.productCard}>
          <Image 
             source={require('./assets/pan_dulce.jpg')}
            style={styles.productImage}
          />
          <Text style={styles.productName}>Croissants</Text>
          <Text style={styles.productDetail}>Tipo De Harina: Harina Integral</Text>
          <Text style={styles.productPrice}>Precio: 5 pesos</Text>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
    
        <View style={styles.productCard}>
          <Image 
            source={require('./assets/pan_dulce.jpg')}
            style={styles.productImage}
          />
          <Text style={styles.productName}>Teleras</Text>
          <Text style={styles.productDetail}>Tipo De Harina: Harina Integral</Text>
          <Text style={styles.productPrice}>Precio: 6 pesos</Text>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
      
        <View style={styles.productCard}>
          <Image 
             source={require('./assets/pan_dulce.jpg')}
            style={styles.productImage}
          />
          <Text style={styles.productName}>Pan De Caja</Text>
          <Text style={styles.productDetail}>Tipo de Harina: Harina De Soya</Text>
          <Text style={styles.productPrice}>Precio: 24 pesos</Text>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Comprar</Text>
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
    height: '20%',
    backgroundColor: '#ffcc80',
  },
  headerTitle: {
    marginLeft: 50,
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 40,
  },
  menu:{
    marginTop: 45,
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffcc80', 
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    marginRight: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  picker: {
    width: 150,
  },
  productContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
    paddingBottom: 70,
  },
  productCard: {
    backgroundColor: '#ffd180', 
    padding: 10,
    borderRadius: 10,
    width: '45%',
    marginBottom: 20,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 100, 
    marginBottom: 5,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  productDetail: {
    marginBottom: 5,
    fontSize: 14,
  },
  productPrice: {
    marginBottom: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#fb8c00', 
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  buyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  }
});

export default App;
