import { useEffect, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';

const Icon = ({ textColor, bgColor, isDay }) => {
  const refs = useRef([]);
  const [hours, setHours] = useState(null);

  useEffect(() => {
    const time = 12;
    setHours(time === 12 ? 0 : time);
  }, []);

  useEffect(() => {
    if (hours != null) {
      refs.current[hours].setNativeProps({
        style: styles.small_circle,
      });
    }
  }, [hours]);

  return (
    <View style={styles.icon}>
      <View
        style={{
          width: 115,
          height: 115,
          display: isDay ? 'none' : 'flex',
          backgroundColor: '#b9b9b9',
          borderRadius: 100,
        }}
      ></View>

      <View
        style={{
          width: 100,
          height: 100,
          display: isDay ? 'flex ' : 'none',
        }}
      >
        <View
          style={[
            styles.sun_square,
            { transform: [{ rotate: '45deg' }], backgroundColor: textColor },
          ]}
        />
        <View style={[styles.sun_square, { backgroundColor: textColor }]} />
        <View
          style={[
            styles.sun_circle,
            { backgroundColor: textColor, borderColor: bgColor },
          ]}
        />
      </View>

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
          style={[styles.smallLine, { top: 0, backgroundColor: textColor }]}
          ref={(ref) => refs.current.push(ref)}
          id='0'
        />

        {/* top right */}
        <View
          style={[
            styles.miniLine,
            {
              top: 24,
              right: 78,
              transform: [{ rotate: '30deg' }],
              backgroundColor: textColor,
            },
          ]}
          ref={(ref) => refs.current.push(ref)}
          id='1'
        />

        <View
          style={[
            styles.miniLine,
            {
              top: 76,
              right: 25,
              transform: [{ rotate: '60deg' }],
              backgroundColor: textColor,
            },
          ]}
          ref={(ref) => refs.current.push(ref)}
          id='2'
        />

        <View
          style={[
            styles.smallLine,
            {
              right: 4,
              transform: [{ rotate: '90deg' }],
              backgroundColor: textColor,
            },
          ]}
          ref={(ref) => refs.current.push(ref)}
          id='3'
        />

        {/* bottom right */}
        <View
          style={[
            styles.miniLine,
            {
              bottom: 76,
              right: 25,
              transform: [{ rotate: '-60deg' }],
              backgroundColor: textColor,
            },
          ]}
          ref={(ref) => refs.current.push(ref)}
          id='4'
        />

        <View
          style={[
            styles.miniLine,
            {
              bottom: 24,
              right: 78,
              transform: [{ rotate: '-30deg' }],
              backgroundColor: textColor,
            },
          ]}
          ref={(ref) => refs.current.push(ref)}
          id='5'
        />

        <View
          style={[styles.smallLine, { bottom: 0, backgroundColor: textColor }]}
          id='6'
          ref={(ref) => refs.current.push(ref)}
        />

        {/* bottom left */}
        <View
          style={[
            styles.miniLine,
            {
              bottom: 24,
              left: 78,
              transform: [{ rotate: '30deg' }],
              backgroundColor: textColor,
            },
          ]}
          ref={(ref) => refs.current.push(ref)}
          id='7'
        />

        <View
          style={[
            styles.miniLine,
            {
              bottom: 76,
              left: 25,
              transform: [{ rotate: '60deg' }],
              backgroundColor: textColor,
            },
          ]}
          ref={(ref) => refs.current.push(ref)}
          id='8'
        />

        <View
          style={[
            styles.smallLine,
            {
              left: 4,
              transform: [{ rotate: '90deg' }],
              backgroundColor: textColor,
            },
          ]}
          ref={(ref) => refs.current.push(ref)}
          id='9'
        />

        {/* top left */}
        <View
          style={[
            styles.miniLine,
            {
              top: 76,
              left: 25,
              transform: [{ rotate: '-60deg' }],
              backgroundColor: textColor,
            },
          ]}
          ref={(ref) => refs.current.push(ref)}
          id='10'
        />

        <View
          style={[
            styles.miniLine,
            {
              top: 24,
              left: 78,
              transform: [{ rotate: '-30deg' }],
              backgroundColor: textColor,
            },
          ]}
          ref={(ref) => refs.current.push(ref)}
          id='11'
        />
      </View>
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
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
    borderStyle: 'solid',
    borderWidth: 8,
  },
  sun_square: {
    position: 'absolute',
    width: 100,
    height: 100,
  },

  circle: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 200,
  },

  smallLine: {
    position: 'absolute',
    width: 2,
    height: 8,
  },
  miniLine: {
    position: 'absolute',
    width: 2,
    height: 5,
  },
  small_circle: {
    position: 'absolute',
    width: 11,
    height: 11,
    borderRadius: 100,
  },
});
