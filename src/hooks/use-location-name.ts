import { useState } from 'react';

export const useLocationName = () => {
  const [map, setMap] = useState<any>();
  const [latLngFromName, setLatLngFromName] = useState<{
    lat: number;
    lng: number;
  }>();

  const assignMap = (data: any) => {
    setMap(data);
  };
  const searchLocationWithLatLong = ({
    lat,
    lng,
  }: {
    lat: number;
    lng: number;
  }) => {
    const geocoder = new map.Geocoder();
    const latlng = new map.LatLng(lat, lng);
    geocoder.geocode(
      { location: latlng },
      function (results: any, status: any) {
        if (status == map.GeocoderStatus.OK) {
          if (results[0]) {
            const value: string[] = results[0].formatted_address.split(',');
            const country = value.at(-1);
            const region = value.at(-2);
            const street = value.at(-3);
            console.log({ street, region, country });
          }
        }
      }
    );
  };

  const searchLocationWithAddress = ({ address }: { address: string }) => {
    if (address.length > 2 && map) {
      const geocoder = new map.Geocoder();

      geocoder.geocode({ address: address }, (results: any) => {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();
        setLatLngFromName({
          lat,
          lng,
        });
      });
    }
  };

  return {
    assignMap,
    latLngFromName,
    searchLocationWithLatLong,
    searchLocationWithAddress,
  };
};
