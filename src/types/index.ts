export type Booking = {
  id: number;
  propertyId: number;
  checkIn: string;
  checkOut: string;
  adultsAmount: number;
  childrenAmount: number;
  note: string;
  guestName: string;
  guestEmail: string;
  guestPhoneNumber: string;
  status: number;
};

export type Bookings = Booking[];

export type Property = {
  id: number;
  title: string;
  pricePerNight: number;
  cleaningFee: number;
  picture: string;
  guestsLimit: number;
};

export type Properties = Property[];
