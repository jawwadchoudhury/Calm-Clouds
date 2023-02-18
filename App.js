import { StyleSheet, View } from 'react-native';

import {
  useFonts,
  Yantramanav_400Regular,
  Yantramanav_500Medium,
  Yantramanav_700Bold,
  Yantramanav_900Black,
} from '@expo-google-fonts/yantramanav';

import { useLocation } from './src/hooks/useLocation';
import { useWeather } from './src/hooks/useWeather';

import Navigation from './src/components/Navigation';
import Weather from './src/components/Weather';
import Icon from './src/components/Icon';
import Region from './src/components/Region';
import Error from './src/components/Error';

let bgColor = '#fff';
let textColor = '#010101';

export default function App() {
  const [fontsLoaded] = useFonts({
    Yantramanav_400Regular,
    Yantramanav_500Medium,
    Yantramanav_700Bold,
    Yantramanav_900Black,
  });

  const [location, errorLocation] = useLocation();

  const [weather, loading, error, refetchWeather] = useWeather(location);

  if (!fontsLoaded) return null;
  if (errorLocation) return <Error error={errorLocation} />;
  if (!location || loading || error) return null;

  if (weather && !weather.isDay) {
    textColor = '#fff';
    bgColor = '#010101';
  }

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Navigation textColor={textColor} refetchWeather={refetchWeather} />

      <View style={styles.spacer} />

      <View style={styles.hero}>
        <Weather textColor={textColor} weather={weather} />
        <Icon textColor={textColor} bgColor={bgColor} isDay={weather.isDay} />
      </View>

      <Region textColor={textColor} region={location.region} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  spacer: {
    width: '100%',
    height: '5%',
  },
  hero: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '55%',
    marginBottom: 10,
  },
});
