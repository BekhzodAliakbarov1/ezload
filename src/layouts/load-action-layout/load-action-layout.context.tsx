/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import React, { createContext, useState, useContext } from 'react';
import { useLocation } from 'react-router';
import { SingleLoadDetailsResponse } from 'types/load.types';

interface Locations {
  address_1?: string;
  address_2?: string;
  district: { title: string; id: string };
  region: { title: string; id: string };
  country: { title: string; id: string };
  zip_code: string;
  latLong: {
    lat?: number;
    lng?: number;
  };
}

interface LoadContextInterface {
  data: {
    load_title: string;
    pickup: Locations;
    delivery: Locations;
    dates: {
      pickup: {
        start: Date | undefined;
        end: Date | undefined;
      };
      delivery: {
        start: Date | undefined;
        end: Date | undefined;
      };
    };
    lugage_size: string;
    cost: number;
    currency_type: string;
    description: string;
    id: string;
  };
  setValues: (values?: { [key: string]: any }) => void;
}

const today = new Date();
const tommorrow = new Date();
tommorrow.setDate(tommorrow.getDate() + 2);

const defaultdata = {
  load_title: '',
  pickup: {
    address_1: '',
    address_2: '',
    district: { title: '', id: '' },
    region: { title: '', id: '' },
    country: { title: '', id: '' },
    zip_code: '',
    latLong: {
      lat: 0,
      lng: 0,
    },
  },
  delivery: {
    address_1: '',
    address_2: '',
    district: { title: '', id: '' },
    region: { title: '', id: '' },
    country: { title: '', id: '' },
    zip_code: '',
    latLong: {
      lat: 0,
      lng: 0,
    },
  },
  dates: {
    pickup: {
      start: today,
      end: tommorrow,
    },
    delivery: {
      start: today,
      end: tommorrow,
    },
  },
  lugage_size: '',
  cost: 0,
  currency_type: 'USD',
  description: '',
  id: '',
};

const LoadContext = createContext<LoadContextInterface>({
  data: defaultdata,
  setValues: () => null,
});

interface StateType {
  state?: { type?: 'EDIT'; data?: SingleLoadDetailsResponse };
}

export const LoadContextProvider: React.FC = ({ children }) => {
  const { state } = useLocation() as StateType;

  const [data, setData] = useState({
    load_title: state?.data?.title ?? '',
    pickup: {
      address_1: state?.data?.pickup_point.orientation,
      address_2: '',
      district: {
        title: state?.data?.pickup_point.district.title ?? '',
        id: '',
      },
      region: {
        title: state?.data?.pickup_point.region.title ?? '',
        id: '',
      },
      country: {
        title: state?.data?.pickup_point.country.title ?? '',
        id: '',
      },
      zip_code: state?.data?.pickup_point.postal_code ?? '',
      latLong: {
        lat: state?.data?.pickup_point.location.latitude,
        lng: state?.data?.pickup_point.location.longitude,
      },
    },
    delivery: {
      address_1: state?.data?.destination.orientation,
      address_2: '',
      district: {
        title: state?.data?.destination.district.title ?? '',
        id: '',
      },
      region: {
        title: state?.data?.destination.region.title ?? '',
        id: '',
      },
      country: {
        title: state?.data?.destination.country.title ?? '',
        id: '',
      },
      zip_code: state?.data?.destination.postal_code ?? '',
      latLong: {
        lat: state?.data?.destination.location.latitude,
        lng: state?.data?.destination.location.longitude,
      },
    },
    dates: {
      pickup: {
        start: new Date(`${state?.data?.earliest_pick_up}`),
        end: new Date(`${state?.data?.latest_pick_up}`),
      },
      delivery: {
        start: new Date(`${state?.data?.earliest_delivery}`),
        end: new Date(`${state?.data?.latest_delivery}`),
      },
    },
    lugage_size: state?.data?.weight ? String(state?.data?.weight) : '',
    cost: state?.data?.price ?? 0,
    currency_type: 'USD',
    description: state?.data?.description ?? '',
    id: state?.data?.id ? String(state?.data?.id) : '',
  });

  const setValues = (values = {}) => {
    setData((prevData) => ({
      ...prevData,
      ...values,
    }));
  };

  return (
    <LoadContext.Provider value={{ data, setValues }}>
      {children}
    </LoadContext.Provider>
  );
};
export const useData = () => useContext(LoadContext);
