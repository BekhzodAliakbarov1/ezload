import { useState, useEffect } from 'react';

export const useCurrentLocation = () => {
  const [latLong, setLatLong] = useState<{ lat: number; lng: number }>({
    lat: 41.313708873016694,
    lng: 69.2353541726438,
  });
  useEffect(() => {
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatLong({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    };
    getLocation();
  }, []);

  return { latLong };
};
