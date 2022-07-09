export interface AddressInterface {
  id: number;
  address: {
    location: {
      latitude: number;
      longitude: number;
    };
    postal_code: string;
    is_user_address: boolean;
    orientation: string;
    country: {
      title: string;
    };
    region: {
      title: string;
    };
    district: {
      title: string;
    };
  };
}
