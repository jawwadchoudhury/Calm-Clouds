import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Navigation = ({ textColor }) => {
  return (
    <>
      <StatusBar style={textColor == '#010101' ? 'dark' : 'light'} />
      <SafeAreaView style={styles.navigation}>
        <Ionicons name='location' size={26} color={textColor} />
        <EvilIcon name='calendar' size={35} color={textColor} />
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
    justifyContent: 'space-between',
  },
});

export default Navigation;
