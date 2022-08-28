/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import MapLocationIcon from 'components/icons/map-location.icon';
import { useMap } from 'hooks/use-map';
import { MapComponentWrapper } from './map.styles';

const AnyReactComponent = () => (
  <div>
    <MapLocationIcon />
  </div>
);

const Map: React.FC<{
  address: string;
  getAddressLine: ({
    fieldName,
    val,
  }: {
    fieldName: 'zip_code' | 'address_1' | 'address_2';
    val: string;
  }) => void;
  getLatLong: ({ lat, lng }: { lat: number; lng: number }) => void;
}> = memo(({ address, getAddressLine, getLatLong }) => {
  const {
    assignMap,
    searchLatLng,
    latLong,
    address_line,
    searchAddressLine,
    handleClick,
    isConnected,
  } = useMap();

  useEffect(() => {
    searchLatLng({ address });
  }, [address, isConnected]);

  useEffect(() => {
    if (address) {
      getAddressLine({ fieldName: 'address_1', val: address_line });
    }
  }, [address_line]);

  useEffect(() => {
    getLatLong({ ...latLong });
  }, [latLong]);

  const handleMapLoads = ({ maps }: { maps: any }) => {
    assignMap(maps);
  };

  return (
    <MapComponentWrapper>
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
        onClick={handleClick}
        center={latLong}
        zoom={14.5}
        defaultZoom={14.5}
        onChange={({ center }) => searchAddressLine({ ...center })}
      >
        <AnyReactComponent />
      </GoogleMapReact>
    </MapComponentWrapper>
  );
});

Map.displayName = 'Map';

export default Map;
