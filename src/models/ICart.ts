import IProduct, {mockProducts} from './IProduct';

export default interface ICartItem {
  product: IProduct;
  quantity: number;
}

export const mockCart = mockProducts.map((product, i) => ({
  product,
  quantity: i,
}));
