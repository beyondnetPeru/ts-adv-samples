import 'reflect-metadata';
import { IDomainEventHandlerMetadata } from '../interfaces/domainevent-handler-metadata.interface';
import { IEventListener } from '../interfaces/eventlistener.interface';

const EVENT_HANDLER_FUNCTIONS = 'event:handler:functions';

export function allHandleDomainEventMetadata(target: IEventListener): IDomainEventHandlerMetadata[] {
  const metadata = Reflect.getMetadata(EVENT_HANDLER_FUNCTIONS, target.constructor);
  return metadata ? metadata : [];
}
