import { Subjects, Publisher, OrderCancelledEvent } from '@impauth/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
