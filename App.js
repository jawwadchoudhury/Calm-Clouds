import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {
  useFonts,
  Yantramanav_400Regular,
  Yantramanav_500Medium,
  Yantramanav_700Bold,
  Yantramanav_900Black,
} from '@expo-google-fonts/yantramanav';

export default function App() {
  const [fontsLoaded] = useFonts({
    Yantramanav_400Regular,
    Yantramanav_500Medium,
    Yantramanav_700Bold,
    Yantramanav_900Black,
  });

  if (!fontsLoaded) return <Text>loading</Text>;

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.navigation}>
        <Ionicons name='location' size={26} color='#010101' />
        <EvilIcon name='calendar' size={35} color='#010101' />
      </SafeAreaView>

      <View style={styles.spacer} />

      <View style={styles.hero}>
        <View style={styles.informations_container}>
          <MaterialComIcon
            name='information-outline'
            size={18}
            color='#010101'
          />
          <Text style={styles.informations}>SUNNY, </Text>
          <Text style={styles.informations_number}>13</Text>
          <View style={{ marginTop: -18, height: 15 }}>
            <Text style={styles.informations_symbol}>&#176;</Text>
          </View>
        </View>

        <View style={styles.icon}>
          <View
            style={[styles.sun_square, { transform: [{ rotate: '45deg' }] }]}
          />
          <View style={styles.sun_square} />

          <View style={styles.sun_circle} />

          <View
            style={[
              styles.circle,
              {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}
          >
            <View
              style={[
                styles.smallLine,
                { left: 4, transform: [{ rotate: '90deg' }] },
              ]}
            />
            <View
              style={[
                styles.smallLine,
                { right: 4, transform: [{ rotate: '90deg' }] },
              ]}
            />
            <View style={[styles.smallLine, { top: 0 }]} />
            <View style={[styles.smallLine, { bottom: 0 }]} />

            <View
              style={[
                styles.miniLine,
                { top: 49, left: 51, transform: [{ rotate: '-45deg' }] },
              ]}
            />

            <View
              style={[
                styles.miniLine,
                { top: 49, right: 51, transform: [{ rotate: '45deg' }] },
              ]}
            />

            <View
              style={[
                styles.miniLine,
                { bottom: 49, left: 51, transform: [{ rotate: '45deg' }] },
              ]}
            />

            <View
              style={[
                styles.miniLine,
                { bottom: 49, right: 51, transform: [{ rotate: '-45deg' }] },
              ]}
            />
          </View>

          {/*           <View style={[styles.line, { opacity: 0.35 }]} />
          <View
            style={[
              styles.line,
              { opacity: 0.35, transform: [{ rotate: '45deg' }] },
            ]}
          />
          <View
            style={[
              styles.line,
              { transform: [{ rotate: '-45deg' }], opacity: 0.35 },
            ]}
          />
          <View style={[styles.horizontalLine, { opacity: 0.35 }]} /> */}
        </View>
      </View>

      <View style={styles.region_container}>
        <Text style={styles.region_text}>
          <MaterialIcon name='my-location' size={14} />
          &nbsp;Quebec, CA
        </Text>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  navigation: {
    display: 'flex',
    width: '90%',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    marginBottom: 6,
  },

  informations_container: {
    width: '100%',
    height: '25%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  informations: {
    color: '#010101',
    fontSize: 28,
    fontFamily: 'Yantramanav_400Regular',
    paddingLeft: 10,
  },
  informations_number: {
    color: '#010101',
    fontSize: 28,
    fontFamily: 'Yantramanav_700Bold',
  },
  informations_symbol: {
    color: '#010101',
    fontSize: 25,
    fontFamily: 'Yantramanav_900Black',
  },

  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '80%',
  },

  sun_circle: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#010101',
    borderStyle: 'solid',
    borderColor: '#fff',
    borderWidth: 8,
  },
  sun_square: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: '#010101',
  },

  circle: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 200,
  },

  line: {
    position: 'absolute',
    width: 1,
    height: 325,
    backgroundColor: '#010101',
  },
  smallLine: {
    position: 'absolute',
    width: 1.5,
    height: 8,
    backgroundColor: '#010101',
  },
  miniLine: {
    position: 'absolute',
    width: 1.5,
    height: 5,
    backgroundColor: '#010101',
  },

  region_container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
    height: '10%',
  },
  region_text: {
    fontFamily: 'Yantramanav_500Medium',
    fontSize: 22,
  },

  horizontalLine: {
    position: 'absolute',
    width: 1,
    height: 325,
    backgroundColor: '#010101',
    transform: [{ rotate: '90deg' }],
  },
});
