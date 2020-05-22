/**
 * Product model
 */
export default interface IProduct {
  id: string;
  name: string;
}

// sample names to generate mocks
const names = ['boy', 'girl', 'neutral'];

/**
 * mock product list to be used in dev and tests
 */
export const mockProducts: IProduct[] = names.map((name, i) => ({
  id: i.toString(),
  name,
}));
