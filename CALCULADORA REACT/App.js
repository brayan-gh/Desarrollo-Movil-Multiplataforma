import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { evaluate } from 'mathjs'; // Importamos la biblioteca math.js para evaluar expresiones matemáticas

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');

  const handleNumberPress = (number) => {
    setDisplayValue((prevValue) => {
      if (prevValue === '0') return number;
      return prevValue + number;
    });
  };

  const handleOperatorPress = (operator) => {
    setDisplayValue((prevValue) => {
      if (prevValue.slice(-1) === '+' || prevValue.slice(-1) === '-' || prevValue.slice(-1) === '*' || prevValue.slice(-1) === '/') {
        return prevValue.slice(0, -1) + operator;
      }
      return prevValue + operator;
    });
  };

  const handleClearPress = () => {
    setDisplayValue('0');
  };

  const handleEqualsPress = () => {
    try {
      const result = evaluate(displayValue); // Utilizamos la función evaluate de math.js para calcular el resultado
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const handleDecimalPress = () => {
    setDisplayValue((prevValue) => {
      if (!prevValue.includes('.')) {
        return prevValue + '.';
      }
      return prevValue;
    });
  };

  const handleBackspacePress = () => {
    setDisplayValue((prevValue) => {
      if (prevValue.length === 1) return '0';
      return prevValue.slice(0, -1);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{displayValue}</Text>
      <View style={styles.buttons}>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={handleClearPress}>
            <Text style={[styles.buttonText, styles.clearButtonText]}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperatorPress('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperatorPress('%')}>
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleBackspacePress()}>
            <Text style={styles.buttonText}>H</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperatorPress('*')}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperatorPress('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={() => handleOperatorPress('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.operatorButton]} onPress={handleEqualsPress}>
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleDecimalPress}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.doubleButton]} onPress={() => handleNumberPress('0')}>
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
    backgroundColor: '#1f1f1f',
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
