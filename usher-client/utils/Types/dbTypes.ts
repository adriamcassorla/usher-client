type EventType = {
  id: number,
  name: string,
  price: number,
  type: String,
  genres: String[],
  image?: String,
  poster?: String,
  language?: String,
  duration?: number,
  description?: String,
  external_url?: String,
  venue: Venue,
  shows: Show[],
  today_shows: Show[],
}

type Venue = {
  id: String,
  name: string,
  external_url?: String,
  address: String,
  zipcode: String,
  city: String,
  latitude: number,
  longitude: number,
  events: EventType[],
  promoter: Promoter,
  promoter_id: number,
}

type Ticket = {
  id: String,
  show: Show,
  show_id: String,
  used: Boolean,
  user: User,
}

type Promoter = {
  id: number,
  name: String,
  email: String,
  password: String,
  venues: Venue[],
  telephone?: number
}

type Show = {
  id?: String,
  date: String,
  active_sale: Boolean,
  available_seats?: number,
  tickets?: Ticket[],
  event?: EventType,
}