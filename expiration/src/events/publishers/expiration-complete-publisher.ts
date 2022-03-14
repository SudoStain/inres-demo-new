import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@impauth/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
