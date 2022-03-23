export function isValid(ticket: Ticket) {
  return !ticket.used && +ticket.show.date > Date.now() + 1000 * 60 * 60;
};

export function sortTickets(tickets: Ticket[]) {
  return [
    { title: 'Active tickets', data: tickets.filter((tik) => isValid(tik)).sort((a, b) => +a.show.date - +b.show.date) },
    { title: 'Past tickets', data: tickets.filter((tik) => !isValid(tik)).sort((a, b) => +a.show.date - +b.show.date) },
  ];
}
