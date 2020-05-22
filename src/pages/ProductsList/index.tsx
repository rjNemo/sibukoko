import React, {FC} from 'react';
// Redux
import {connect} from 'react-redux';
import {selectProducts} from '../../store/product';
// Typing
import IProduct from '../../models/IProduct';

/**
 * Receives a Product array and displays its content
 */
export const ProductsListPage: FC<{products: IProduct[]}> = ({products}) => (
  <div className="">
    {products.map(p => (
      <div key={p.id}>{p.name}</div>
    ))}
  </div>
);

/** Displays Product from the server */
export default connect(selectProducts)(ProductsListPage);
