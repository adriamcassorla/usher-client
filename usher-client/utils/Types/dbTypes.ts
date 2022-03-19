type User = {
  id: String,
  email: String,
  password: String,
  first_name: String,
  last_name: String,
  created_at: String,
  favorite_events: EventType[]
  tickets: [Ticket],
  notifications: Boolean,
}

type EventType = {
  id: number,
  name: String,
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
  venue_id: String,
  favorite_by: User[],
  shows: Show[],
  today_shows: Show[],
}

type Venue = {
  id: String,
  name: String,
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