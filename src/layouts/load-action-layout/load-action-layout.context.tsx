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
  save_my_address: boolean;
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

const tommorrow = new Date();
const theDayAfterTommorrow = new Date();
tommorrow.setDate(tommorrow.getDate() + 1);
theDayAfterTommorrow.setDate(theDayAfterTommorrow.getDate() + 2);
console.log(tommorrow);

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
    save_my_address: false,
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
    save_my_address: false,
  },
  dates: {
    pickup: {
      start: tommorrow,
      end: theDayAfterTommorrow,
    },
    delivery: {
      start: tommorrow,
      end: theDayAfterTommorrow,
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
      save_my_address: false,
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
      save_my_address: false,
    },
    dates: {
      pickup: {
        start: new Date(
          state?.data?.earliest_pick_up
            ? `${state?.data?.earliest_pick_up}`
            : tommorrow
        ),
        end: new Date(
          state?.data?.latest_pick_up
            ? `${state?.data?.latest_pick_up}`
            : theDayAfterTommorrow
        ),
      },
      delivery: {
        start: new Date(
          state?.data?.earliest_delivery
            ? `${state?.data?.earliest_delivery}`
            : tommorrow
        ),
        end: new Date(
          state?.data?.latest_delivery
            ? `${state?.data?.latest_delivery}`
            : theDayAfterTommorrow
        ),
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
