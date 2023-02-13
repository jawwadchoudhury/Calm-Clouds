import { useState, useEffect, useCallback } from 'react';

import { API_KEY } from '@env';

import adjustCondition from '../utils/condition';

/* call */
async function getWeather(location) {
  try {
    if (!location || !location.point) throw new Error('Location not found');

    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location.point.latitude},${location.point.longitude}`
    );
    const { current } = await res.json();
    let condition = adjustCondition(current.condition.code);

    return {
      temp: Math.round(current.temp_c),
      condition: isNaN(condition) ? condition : current.condition.text,
      isDay: current.is_day,
    };
  } catch (error) {
    throw new Error(error);
  }
}

/* hook */
export const useWeather = (location) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async () => {
    if (!location) return;
    try {
      setError(null);
      setLoading(true);

      const weather = await getWeather(location);
      setWeather(weather);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [location]);

  const refetchWeather = () => {
    fetchWeather();
  };

  useEffect(() => {
    fetchWeather();
  }, [location]);

  return [weather, loading, error, refetchWeather];
};
