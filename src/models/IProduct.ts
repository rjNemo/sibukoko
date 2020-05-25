/**
 * Product model
 */
export default interface IProduct {
  id: string;
  name: string;
  picture: string;
  description: string;
  price: number;
}

// sample values to generate mocks
const names = ['boy', 'girl', 'neutral'];
const pics = [
  'https://source.unsplash.com/weekly?boy',
  'https://source.unsplash.com/weekly?girl',
  'https://source.unsplash.com/weekly?neutral',
];
const descriptions = [
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, consectetur?',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, animi fugiat repellat expedita quasi iure.',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, animi fugiat repellat expedita quasi iure.',
];
const prices = [Math.random() * 10, Math.random() * 10, Math.random() * 10];
/**
 * mock product list to be used in dev and tests
 */
export const mockProducts: IProduct[] = names.map((name, i) => ({
  id: i.toString(),
  name,
  picture: pics[i],
  description: descriptions[i],
  price: prices[i],
}));
