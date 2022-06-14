/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import React, { createContext, useState, useContext } from 'react';

interface LoadContextInterface {
  data: {
    categories?: string[];
    description?: string;
    fee?: string;
    is_exclusive?: boolean;
    location?: { lat: number; long: number };
    location_name?: string;
    medias?: [
      {
        content_type: string;
        media_id: string;
      }
    ];
    visible_all?: boolean;
    media_url?: string;
    media_type?: string;
    id?: string;
  };
  setValues: (values?: { [key: string]: any }) => void;
}
const LoadContext = createContext<LoadContextInterface>({
  data: {},
  setValues: () => null,
});

export const LoadContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState({});

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
