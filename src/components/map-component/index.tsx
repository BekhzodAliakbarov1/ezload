import React, { useState, useEffect, memo } from 'react';
import GoogleMapReact from 'google-map-react';
import MapLocationIcon from 'components/icons/map-location.icon';
import { useCurrentLocation } from 'hooks/use-current-location';
import { useLocationName } from 'hooks/use-location-name';

const MapComponent = memo(() => {
  const { latLong } = useCurrentLocation();
  const { assignMap, searchLocationWithLatLong } = useLocationName();
  const [data, setData] = useState<{
    center: {
      lat: number;
      lng: number;
    };
    zoom: number;
  }>({
    center: {
      lat: 41.313708873016694,
      lng: 69.2353541726438,
    },
    zoom: 10,
  });

  useEffect(() => {
    setData((val) => {
      return { ...val, center: latLong };
    });
  }, [latLong]);

  const clickHandler = (location: GoogleMapReact.ClickEventValue) => {
    const { lat, lng } = location;
    setData((val) => {
      return { ...val, center: { lat, lng } };
    });
    searchLocationWithLatLong({ lat, lng });
  };

  const handleMapLoads = ({ maps }: { maps: any }) => {
    assignMap(maps);
  };

  return (
    <>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyCZiC3W1cqOR1LUFElQNSHBK4NL7e7MMSs',
          language: 'uz',
          libraries: ['places', 'geometry', 'drawing', 'visualization'],
        }}
        defaultCenter={{
          lat: 41.313708873016694,
          lng: 69.2353541726438,
        }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={handleMapLoads}
        onClick={clickHandler}
        center={data.center}
        options={{ maxZoom: 20, minZoom: 5 }}
        zoom={data.zoom}
        onChange={({ center, zoom }) => setData({ center, zoom })}
        hoverDistance={10}
      >
        <MapLocationIcon />
      </GoogleMapReact>
    </>
  );
});

MapComponent.displayName = 'MapComponent';

export default MapComponent;
