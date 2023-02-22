export interface IProduct {}

export interface IProductConstructor {
  new (...arg: any[]): IProduct;
}
