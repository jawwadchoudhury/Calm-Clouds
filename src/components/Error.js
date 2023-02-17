import { Text, SafeAreaView } from 'react-native';

const Error = ({ error }) => {
  return (
    <SafeAreaView
      style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}
    >
      <Text style={{ fontFamily: 'Yantramanav_400Regular', fontSize: 20 }}>
        {error}
      </Text>
    </SafeAreaView>
  );
};

export default Error;
