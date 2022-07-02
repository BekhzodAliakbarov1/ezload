interface LocationPoint {
  location: {
    latitude: number;
    longitude: number;
  };
  orientation: string;
  postal_code: string;
  is_user_address: boolean;
  country: {
    title: string;
  };
  region: {
    title: string;
  };
  district: {
    title: string;
  };
}

interface LoadMainPart {
  pickup_point: LocationPoint;
  destination: LocationPoint;
  order_number: string;
  earliest_pick_up: string;
  latest_pick_up: string;
  earliest_delivery: string;
  latest_delivery: string;
  bids_count: number;
  visits_count: number;
  id: number;
}

export interface SingleLoadResponse extends LoadMainPart {
  driver?: {
    profile_picture?: {
      file: string;
    };
    first_name: string;
    phone_number: string;
  };
}

export interface SingleLoadDetailsResponse extends LoadMainPart {
  title: string;
  description: string;
  price: number;
  weight: number;
  bids?: {
    id: number;
    owner: {
      profile_picture?: {
        file: string;
      };
      first_name: string;
      phone_number: string;
    };
    price: number;
    average_rate: number;
  }[];
}
