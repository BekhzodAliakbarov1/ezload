export interface SingleLoadInterface {
  pickup_address: string;
  pickup_country: string;
  pickup_date: Date | string;
  deliver_address: string;
  deliver_country: string;
  deliver_date: Date | string;
  distance: string;
  bid_count: string | number;
  view_count: string | number;
  id: string | number;
}
