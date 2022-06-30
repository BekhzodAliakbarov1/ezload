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

export interface SingleLoadResponse {
  pickup_point: LocationPoint;
  destination: LocationPoint;
  order_number: string;
  earliest_pick_up: string;
  latest_pick_up: string;
  earliest_delivery: string;
  latest_delivery: string;
  bids_count: number;
  visits_count: number;
  driver: {
    profile_picture?: {
      file: string;
    };
    first_name: string;
    phone_number: string;
  };
  id: number;
}
