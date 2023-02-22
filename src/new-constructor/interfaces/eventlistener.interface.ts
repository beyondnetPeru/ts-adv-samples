export interface IEventListener {}

export interface IEventlistenerConstructor {
  new (...arg: any[]): IEventListener;
}
