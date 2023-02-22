import { DomainEventConstructor } from './domainevent.interface';

export interface IDomainEventHandlerMetadata {
  functionName: string;
  event: DomainEventConstructor<any>;
  eventArgumentIndex: number;
}
