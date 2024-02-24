import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, ScrollView, Image, View } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async (latitude, longitude) => {
      try {
        const apiKey = 'bb316264b48f44f4830172424231110'; 
        const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latitude},${longitude}&days=5&aqi=no&alerts=no`;
        const response = await axios.get(url);
        setWeather(response.data);
        setLocation(`${response.data.location.name}, ${response.data.location.region}`);
      } catch (error) {
        console.error(error);
      }
    };

    const getLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.error('Permission to access location was denied');
          return;
        }

        let locationResult = await Location.getCurrentPositionAsync({});
        fetchWeather(locationResult.coords.latitude, locationResult.coords.longitude);
      } catch (error) {
        console.error(error);
      }
    };

    getLocation();
  }, []);

  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.location}>{location ? location : 'Cargando...'}</Text>
          <Text style={styles.temperature}>{weather ? `${weather.current.temp_c}°` : ''}</Text>
          <Text style={styles.description}>{weather ? weather.current.condition.text : ''}</Text>
        </View>

        
        {weather && (
          <ScrollView horizontal={true} style={styles.hourlyForecast}>
            {weather.forecast.forecastday[0].hour.map((hour, index) => (
              <View key={index} style={styles.hourItem}>
                <Text style={styles.hour}>{new Date(hour.time).getHours()}:00</Text>
                <Image source={{ uri: `https:${hour.condition.icon}` }} style={styles.icon} />
                <Text style={styles.hourTemp}>{`${hour.temp_c}°`}</Text>
              </View>
            ))}
          </ScrollView>
        )}

        <View style={styles.extendedForecast}>
  {weather && weather.forecast.forecastday.map((day, index) => (
    <View key={index} style={styles.forecastDay}>
      <Text style={styles.day}>{new Date(day.date).toLocaleDateString('es', { weekday: 'long', day: 'numeric', month: 'long' })}</Text>
      <Image source={{ uri: `https:${day.day.condition.icon}` }} style={styles.icon} />
      <Text style={styles.temp}>{`${day.day.maxtemp_c}° / ${day.day.mintemp_c}°`}</Text>
    </View>
  ))}
</View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  // ... tus otros estilos
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingTop: 100,
  },
  location: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
  temperature: {
    marginTop: 10,
    fontSize: 90,
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  extendedForecast: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  forecastDay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
  },
  day: {
    fontSize: 20,
    color: 'white',
  },
  icon: {
    width: 50,
    height: 50,
  },
  temp: {
    fontSize: 20,
    color: 'white',
  },
  hourlyForecast: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,

  },
  hourItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  hour: {
    color: 'white',
    fontSize: 16,
  },
  hourTemp: {
    color: 'white',
    fontSize: 16,
    marginTop: 5,
  },

});

export default App;
