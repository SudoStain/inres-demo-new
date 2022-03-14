import { Publisher, OrderCreatedEvent, Subjects } from '@impauth/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
