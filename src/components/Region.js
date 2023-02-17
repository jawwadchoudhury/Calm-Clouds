import { View, Text, StyleSheet } from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Region = ({ textColor, region }) => {
  return (
    <View style={styles.region_container}>
      <Text style={[styles.region_text, { color: textColor }]}>
        <MaterialIcon name='my-location' color={textColor} size={14} />
        &nbsp;{region.city}, {region.isoCountryCode}
      </Text>
    </View>
  );
};

export default Region;

const styles = StyleSheet.create({
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
    fontSize: 26,
  },
});
