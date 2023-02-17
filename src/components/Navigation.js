import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Navigation = ({ textColor, refetchWeather }) => {
  return (
    <>
      <StatusBar style={textColor == '#010101' ? 'dark' : 'light'} />
      <SafeAreaView style={styles.navigation}>
        <MaterialCommunityIcons
          name='cloud-refresh'
          color={textColor}
          size={22}
          onPress={refetchWeather}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  navigation: {
    display: 'flex',
    width: '90%',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default Navigation;
