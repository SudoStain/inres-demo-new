import { Subjects, Publisher, PaymentCreatedEvent } from '@impauth/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
