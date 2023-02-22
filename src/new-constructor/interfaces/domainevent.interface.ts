export interface IDomainEvent {}

export type DomainEventConstructor<T extends IDomainEvent> = new (...args: any[]) => T;
