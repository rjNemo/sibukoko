import IProduct, {mockProducts} from './IProduct';

interface ICart {
  items: ICartItem[];
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

const mockCartItems = mockProducts.map((product, i) => ({
  product,
  quantity: i,
}));

export const mockCart = {items: mockCartItems};

export default ICart;
