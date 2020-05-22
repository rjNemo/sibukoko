import React, {FC, useEffect} from 'react';
// Redux
import {connect, useDispatch} from 'react-redux';
import {selectProducts} from '../../store/product';
import {loadProducts} from '../../store/product/actions';
// Typing
import IProduct from '../../models/IProduct';
import {Container, Typography} from '@material-ui/core';

import ProductItem from '../../components/ProductItem';

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
  }, [loadProducts, dispatch]);

  return (
    <Container>
      <Typography variant="h4" component="h2">
        Product List
      </Typography>
      {products.map(p => (
        <ProductItem product={p} />
      ))}
    </Container>
  );
};

/** Displays Product from the server */
const ProductListContainer: FC<{products: IProduct[]}> = ({products}) => {
  return <ProductsListPage products={products} loadProducts={loadProducts} />;
};

export default connect(selectProducts)(ProductListContainer);
