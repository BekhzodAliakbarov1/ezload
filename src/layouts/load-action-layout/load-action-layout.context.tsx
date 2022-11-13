/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useLoad } from 'server-state/queries/use-load';

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
    delivery_route: null;
    pickup_route: null;
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

export const defaultdata = {
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
  pickup_route: null,
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
  delivery_route: null,
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
  state?: { type?: 'EDIT'; id?: string };
}

export const LoadContextProvider: React.FC = ({ children }) => {
  const { state } = useLocation() as StateType;
  const { data: editedLoadData, refetch } = useLoad({ load_id: state?.id });
  const [data, setData] = useState({
    load_title: '',
    pickup_route: null,
    pickup: {
      address_1: '',
      address_2: '',
      district: {
        title: '',
        id: '',
      },
      region: {
        title: '',
        id: '',
      },
      country: {
        title: '',
        id: '',
      },
      zip_code: '',
      latLong: {},
      save_my_address: false,
    },
    delivery_route: null,
    delivery: {
      address_1: '',
      address_2: '',
      district: {
        title: '',
        id: '',
      },
      region: {
        title: '',
        id: '',
      },
      country: {
        title: '',
        id: '',
      },
      zip_code: '',
      latLong: {},
      save_my_address: false,
    },
    dates: {
      pickup: {
        start: new Date(tommorrow),
        end: new Date(theDayAfterTommorrow),
      },
      delivery: {
        start: new Date(tommorrow),
        end: new Date(theDayAfterTommorrow),
      },
    },
    lugage_size: '',
    cost: 0,
    currency_type: 'USD',
    description: '',
    id: '',
  });
  useEffect(() => {
    if (state?.id) {
      refetch();
    }
  }, [refetch, state?.id]);

  useEffect(() => {
    if (editedLoadData) {
      setData({
        load_title: editedLoadData?.title ?? '',
        pickup_route: null,
        pickup: {
          address_1: editedLoadData?.pickup_point.orientation ?? '',
          address_2: '',
          district: {
            title: editedLoadData?.pickup_point.district.title ?? '',
            id: editedLoadData?.pickup_point.district.id ?? '',
          },
          region: {
            title: editedLoadData?.pickup_point.region.title ?? '',
            id: editedLoadData?.pickup_point.region.id ?? '',
          },
          country: {
            title: editedLoadData?.pickup_point.country.title ?? '',
            id: editedLoadData?.pickup_point.country.id ?? '',
          },
          zip_code: editedLoadData?.pickup_point.postal_code ?? '',
          latLong: {
            lat: editedLoadData?.pickup_point.location.latitude,
            lng: editedLoadData?.pickup_point.location.longitude,
          },
          save_my_address: false,
        },
        delivery_route: null,
        delivery: {
          address_1: editedLoadData?.destination.orientation ?? '',
          address_2: '',
          district: {
            title: editedLoadData?.destination.district.title ?? '',
            id: editedLoadData?.destination.district.id ?? '',
          },
          region: {
            title: editedLoadData?.destination.region.title ?? '',
            id: editedLoadData?.destination.region.id ?? '',
          },
          country: {
            title: editedLoadData?.destination.country.title ?? '',
            id: editedLoadData?.destination.country.id ?? '',
          },
          zip_code: editedLoadData?.destination.postal_code ?? '',
          latLong: {
            lat: editedLoadData?.destination.location.latitude ?? undefined,
            lng: editedLoadData?.destination.location.longitude ?? undefined,
          },
          save_my_address: false,
        },
        dates: {
          pickup: {
            start: new Date(editedLoadData?.earliest_pick_up ?? tommorrow),
            end: new Date(
              editedLoadData?.latest_pick_up ?? theDayAfterTommorrow
            ),
          },
          delivery: {
            start: new Date(editedLoadData?.earliest_delivery ?? tommorrow),
            end: new Date(
              editedLoadData?.latest_delivery ?? theDayAfterTommorrow
            ),
          },
        },
        lugage_size: editedLoadData?.weight
          ? String(editedLoadData?.weight)
          : '',
        cost: editedLoadData?.price ?? 0,
        currency_type: editedLoadData?.currency ?? 'USD',
        description: editedLoadData?.description ?? '',
        id: state?.id ?? '',
      });
    }
  }, [editedLoadData, state?.id]);

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
