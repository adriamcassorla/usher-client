type UserProfile = {
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

type User = {
  id: String,
  favorite_events: EventType[]
}