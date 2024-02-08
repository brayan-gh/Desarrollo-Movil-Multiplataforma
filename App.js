import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.display}>0</Text>
      <View style={styles.buttons}>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.clearButton]}>
            <Text style={[styles.buttonText, styles.clearButtonText]}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]}>
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]}>
            <Text style={styles.buttonText}>CE</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.operatorButton]}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.operatorButton]}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.operatorButton]}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.operatorButton]}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.doubleButton]}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
  },
  display: {
    marginTop: 150,
    padding: 50,
    backgroundColor: '#np333',
    textAlign: 'right',
    fontSize: 50,
    color: '#fff',
  },
  buttons: {
    marginTop: 40,
    paddingBottom: 35,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c2c2c',
    padding: 20,
    borderRadius: 50,
    width: 80,
    height: 80,
  },
  doubleButton: {
    width: 184,
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
  },
  clearButton: {
    backgroundColor: '#ff4d4d',
  },
  clearButtonText: {
    color: '#fff',
  },
  operatorButton: {
    backgroundColor: '#f0ad4e',
  },
});
