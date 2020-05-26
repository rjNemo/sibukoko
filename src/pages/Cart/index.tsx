import React, {FC} from 'react';
import {Container, Typography} from '@material-ui/core';
import IProduct from '../../models/IProduct';
import ProductItem from '../../components/ProductItem';
import {connect} from 'react-redux';
import {selectCart} from '../../store/product';

const CartPage: FC<{cart: IProduct[]}> = ({cart}) => (
  <Container>
    <Typography>Cart</Typography>
    {cart.map(c => (
      <ProductItem product={c} key={c.id} />
    ))}
  </Container>
);

export default connect(selectCart)(CartPage);
