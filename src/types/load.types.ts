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
    id: string;
  };
  region: {
    title: string;
    id: string;
  };
  district: {
    title: string;
    id: string;
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
  status?: 1 | 2 | 3;
  accepted_bid?: number;
}

export interface SingleLoadResponse extends LoadMainPart {
  driver?: {
    id: string;
    profile_picture?: {
      file: string;
    };
    first_name: string;
    phone_number: string;
  };
}

export interface SingleLoadDetailsResponse extends LoadMainPart {
  accepted_bid: number;
  title: string;
  description: string;
  price: number;
  weight: number;
  status: 1 | 2 | 3;
  driver?: {
    id: string;
    average_rate: number;
    first_name: string;
    phone_number: string;
    profile_picture?: {
      file: string;
    };
    loads_count: number;
  };
  owner: {
    first_name: string;
    phone_number: string;
  };
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
  is_bidden?: boolean;
  bid_id?: number;
  currency?: 'USD' | 'UZS' | 'RUB';
}
