import React, {FC} from 'react';
import IProduct from '../../models/IProduct';

interface IProps {
  products: IProduct[];
}
/**
 * Displays Products from the server
 */
const ProductsListPage: FC<IProps> = ({products}) => (
  <div className="">
    {products.map(p => (
      <div key={p.id}>{p.name}</div>
    ))}
  </div>
);

export default ProductsListPage;
