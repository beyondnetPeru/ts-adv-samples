import { IEventlistenerConstructor } from '../interfaces/eventlistener.interface';

export function HandleDomainEvent(target: { constructor: IEventlistenerConstructor } | any, functioName: string): void {
  const constructor = target.constructor;
  const types = Reflect.getMetadata('design:paramtypes', target, functioName);

  console.log(`CONSTRUCTOR: ${constructor}`);
  console.log(`TYPES: ${types}`);
  console.log(`TARGET: ${JSON.stringify(target)}`);
}
