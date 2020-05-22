import React, {FC, useEffect} from 'react';
// Redux
import {connect, useDispatch} from 'react-redux';
import {selectProducts, loadProducts} from '../../store/product';
// Typing
import IProduct from '../../models/IProduct';

interface IProps {
  products: IProduct[];
  loadProducts: typeof loadProducts;
}

/**
 * Receives a Product array and displays its content
 */
export const ProductsListPage: FC<IProps> = ({products, loadProducts}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [loadProducts]);

  return (
    <div>
      {products.map(p => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
};

/** Displays Product from the server */
const ProductListContainer: FC<{products: IProduct[]}> = ({products}) => {
  return <ProductsListPage products={products} loadProducts={loadProducts} />;
};

export default connect(selectProducts)(ProductListContainer);
