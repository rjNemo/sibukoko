/**
 * Product model
 */
export default interface IProduct {
  id: string;
  name: string;
  picture: string;
  description: string;
}

// sample names to generate mocks
const names = ['boy', 'girl', 'neutral'];
const pics = [
  'https://source.unsplash.com/weekly?boy',
  'https://source.unsplash.com/weekly?girl',
  'https://source.unsplash.com/weekly?neutral',
];
const description = [
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, consectetur?',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, animi fugiat repellat expedita quasi iure.',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, animi fugiat repellat expedita quasi iure.',
];

/**
 * mock product list to be used in dev and tests
 */
export const mockProducts: IProduct[] = names.map((name, i) => ({
  id: i.toString(),
  name,
  picture: pics[i],
  description: description[i],
}));
