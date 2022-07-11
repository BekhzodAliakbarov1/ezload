/* eslint-disable @typescript-eslint/no-explicit-any */
import googleMapReact from 'google-map-react';
import { useState, useReducer } from 'react';

type State = {
  latLong: {
    lat: number;
    lng: number;
  };
  address_line: string;
  isLoading: boolean;
  isError: boolean;
};

enum ActionKind {
  Increase = 'INCREASE',
  Decrease = 'DECREASE',
  SET_LAT_LNG = 'SET_LAT_LNG',
  SET_ADDRESS_LINE = 'SET_ADDRESS_LINE',
}

type Action = {
  type: ActionKind;
  payload: any;
};

const initialState: State = {
  latLong: {
    lat: 41.313708873016694,
    lng: 69.2353541726438,
  },
  address_line: '',
  isLoading: false,
  isError: false,
};

function reducer(state: State, action: Action): State {
  const { type, payload } = action;
  switch (type) {
    case ActionKind.SET_LAT_LNG:
      return {
        ...state,
        latLong: { ...payload },
      };
    case ActionKind.SET_ADDRESS_LINE:
      return {
        ...state,
        address_line: payload,
      };
    default:
      return state;
  }
}

export const useMap = () => {
  const [map, setMap] = useState<any>();

  const [{ latLong, address_line }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const assignMap = (data: any) => {
    setMap(data);
  };

  const searchAddressLine = ({ lat, lng }: { lat: number; lng: number }) => {
    const geocoder = map && new map.Geocoder();
    const latlng = map && new map.LatLng(lat, lng);
    geocoder?.geocode(
      { location: latlng },
      function (results: any, status: any) {
        if (status == map.GeocoderStatus.OK) {
          if (results[0]) {
            const value: string[] = results[0].formatted_address.split(',');
            const street = value.at(-3);
            dispatch({ type: ActionKind.SET_ADDRESS_LINE, payload: street });
          }
        }
      }
    );
  };

  const searchLatLng = ({ address }: { address: string }) => {
    if (address.length > 2 && map) {
      const geocoder = map && new map.Geocoder();

      geocoder?.geocode({ address: address }, (results: any) => {
        if (results) {
          const lat = results[0].geometry.location.lat();
          const lng = results[0].geometry.location.lng();
          dispatch({ payload: { lat, lng }, type: ActionKind.SET_LAT_LNG });
        }
      });
    }
  };
  const handleClick = (value: googleMapReact.ClickEventValue) => {
    searchAddressLine({ lat: value.lat, lng: value.lng });
    dispatch({
      type: ActionKind.SET_LAT_LNG,
      payload: { lat: value.lat, lng: value.lng },
    });
  };

  return {
    assignMap,
    latLong,
    address_line,
    searchAddressLine,
    searchLatLng,
    handleClick,
    isConnected: Boolean(map),
  };
};
