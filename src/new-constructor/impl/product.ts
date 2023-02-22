import { IProduct, IProductConstructor } from '../interfaces/product.interface';

export const buildProduct = (target: { constructor: IProductConstructor }): IProduct => {
  const product = new target.constructor('milk', 10.6);

  return product;
};
