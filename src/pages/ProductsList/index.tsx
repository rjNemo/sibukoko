import React, {FC, useEffect} from 'react';
// Redux
import {connect, useDispatch} from 'react-redux';
import {selectProducts} from '../../store/product';
import {loadProducts} from '../../store/product/actions';
// UI
import {Container, Typography, Grid} from '@material-ui/core';
// Typing
import IProduct from '../../models/IProduct';

import ProductItem from '../../components/ProductItem';

interface IProps {
  products: IProduct[];
  loadProducts: typeof loadProducts;
}

/**
 * Receives a Product array and displays its content.
 * The product array is updated by calling loadProduct function.
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
      <Grid container justify="space-between" xs={12} spacing={3}>
        {products.map(p => (
          <ProductItem product={p} key={p.id} />
        ))}
      </Grid>
    </Container>
  );
};

/**
 * Displays Product from the server.
 * This container serve to unexpose props.
 * The props are attached by connect HOC.
 * */
const ProductListContainer: FC<{products: IProduct[]}> = ({products}) => {
  return <ProductsListPage products={products} loadProducts={loadProducts} />;
};

export default connect(selectProducts)(ProductListContainer);
