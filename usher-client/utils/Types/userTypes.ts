type UserProfile = {
  id: string,
  email: string,
  password: string,
  first_name: string,
  last_name: string,
  created_at: string,
  favorite_events: EventType[]
  tickets: Ticket[],
  notifications: Boolean,
}

type User = {
  id: string,
  favorite_events: EventType[],
}