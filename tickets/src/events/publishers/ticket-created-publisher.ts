import { Publisher, Subjects, TicketCreatedEvent } from '@impauth/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
