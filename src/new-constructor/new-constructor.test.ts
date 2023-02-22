import { HandleDomainEvent } from './impl/domainevent-handler';
import { allHandleDomainEventMetadata } from './impl/domainevent-metadata';
import { IDomainEvent } from './interfaces/domainevent.interface';
import { IEventListener } from './interfaces/eventlistener.interface';

class FooDomainEvent implements IDomainEvent {}

describe('Testing new {} definition', () => {
  test('should be able to register a handler', () => {
    class TestFooEventHandler implements IEventListener {
      @HandleDomainEvent
      public FooRun(_event: FooDomainEvent) {}
    }

    const handler = new TestFooEventHandler();
    const metadata = allHandleDomainEventMetadata(handler);

    console.log(`HANDLER: ${JSON.stringify(handler)}`);
    console.log(`METADATA: ${JSON.stringify(metadata)}`);
  });
});
