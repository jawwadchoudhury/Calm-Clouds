import { useState, useEffect, useCallback } from 'react';

import * as Location from 'expo-location';

export const useLocation = () => {
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);

  const getLocation = useCallback(async () => {
    setError(null);
    const { granted } = await Location.getForegroundPermissionsAsync();
    if (!granted) {
      const { granted } = await Location.requestForegroundPermissionsAsync();

      if (!granted) {
        setError('Permission to access location was denied');
        return;
      }
    }

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync();

    const [{ city, isoCountryCode }] = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });

    setLocation({
      point: { latitude, longitude },
      region: { city, isoCountryCode },
    });
  }, []);

  useEffect(() => {
    getLocation();
  }, []);

  return [location, error];
};
