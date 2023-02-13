import { View, Text, StyleSheet } from 'react-native';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Weather = ({ textColor, weather }) => {
  return (
    <View style={styles.informations_container}>
      <MaterialComIcon name='information-outline' size={19} color={textColor} />
      <Text style={[styles.informations, { color: textColor }]}>
        {weather.condition},{' '}
      </Text>
      <Text style={[styles.informations_number, { color: textColor }]}>
        {weather.temp}
      </Text>
      <View style={{ marginTop: -18, height: 15 }}>
        <Text style={[styles.informations_symbol, { color: textColor }]}>
          &#176;
        </Text>
      </View>
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  informations_container: {
    width: '100%',
    height: '25%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  informations: {
    fontSize: 28,
    fontFamily: 'Yantramanav_400Regular',
    paddingLeft: 15,
    paddingRight: 6,
  },
  informations_number: {
    fontSize: 28,
    fontFamily: 'Yantramanav_700Bold',
  },
  informations_symbol: {
    fontSize: 25,
    fontFamily: 'Yantramanav_900Black',
  },
});
