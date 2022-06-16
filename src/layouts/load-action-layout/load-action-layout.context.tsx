/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import React, { createContext, useState, useContext } from 'react';

interface LoadContextInterface {
  data: {
    load_title: string;
    pickup: {
      addresline_1: string;
      addresline_2: string;
      street: string;
      region: string;
      country: string;
      zipcode: string;
    };
    delivery: {
      addresline_1: string;
      addresline_2: string;
      street: string;
      region: string;
      country: string;
      zipcode: string;
    };
    dates: {
      pickup: {
        start: Date;
        end: Date;
      };
      delivery: {
        start: Date;
        end: Date;
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
    addresline_1: '',
    addresline_2: '',
    street: '',
    region: '',
    country: '',
    zipcode: '',
  },
  delivery: {
    addresline_1: '',
    addresline_2: '',
    street: '',
    region: '',
    country: '',
    zipcode: '',
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

export const LoadContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(defaultdata);

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
