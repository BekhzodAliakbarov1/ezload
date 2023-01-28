export interface AddressInterface {
  id: number;
  address: {
    id: number;
    location: {
      latitude: number;
      longitude: number;
    };
    postal_code: string;
    is_user_address: boolean;
    orientation: string;
    country: {
      title: string;
      id: number;
    };
    region: {
      title: string;
      id: number;
    };
    district: {
      title: string;
      id: number;
    };
  };
}

export interface CreateProfileAddressRequestInterface {
  country: number;
  region: number;
  district: number|null;
  location: {
    latitude: number;
    longitude: number;
  };
  orientation: string;
  postal_code: string;
}
export interface CreateAddressRequestInterface
  extends CreateProfileAddressRequestInterface {
  is_user_address: boolean;
}
