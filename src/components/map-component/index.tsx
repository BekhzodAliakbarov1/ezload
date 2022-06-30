import React, { useState, useEffect, memo } from 'react';
import GoogleMapReact from 'google-map-react';
import MapLocationIcon from 'components/icons/map-location.icon';
import { useLocationName } from 'hooks/use-location-name';
import { debounce } from 'lodash';

const MapComponent: React.FC<{
  address: string;
}> = memo(({ address }) => {
  const {
    assignMap,
    searchLocationWithLatLong,
    searchLocationWithAddress,
    latLngFromName,
  } = useLocationName();
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
    zoom: 13.5,
  });

  // // debouncer for helping api call amount decrease
  const debouncedSearch = debounce(() => {
    searchLocationWithAddress({ address });
  }, 1000);

  // // calling api
  useEffect(() => {
    debouncedSearch();
    return () => {
      debouncedSearch.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  // // if location change from input animate map handler
  useEffect(() => {
    if (latLngFromName) {
      setData((val) => {
        return { ...val, center: latLngFromName };
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latLngFromName?.lat, latLngFromName?.lng]);

  // // map click handler
  // const clickHandler = (location: GoogleMapReact.ClickEventValue) => {
  //   const { lat, lng } = location;
  //   setData((val) => {
  //     return { ...val, center: { lat, lng } };
  //   });
  //   searchLocationWithLatLong({ lat, lng });
  // };

  const handleMapLoads = ({ maps }: { maps: any }) => {
    assignMap(maps);
  };
  console.log(data.center);

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
        // onClick={clickHandler}
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
