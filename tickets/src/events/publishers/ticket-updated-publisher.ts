import { Publisher, Subjects, TicketUpdatedEvent } from '@impauth/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
