import React, {FC} from 'react';
import {Container, Typography} from '@material-ui/core';
import IProduct from '../../models/IProduct';
import ProductItem from '../../components/ProductItem';
import {connect} from 'react-redux';
import {selectCart} from '../../store/product';
import ICart, {mockCart} from '../../models/ICart';

const CartPage: FC<{cart: ICart}> = ({cart: {items}}) => (
  <Container>
    <Typography>Cart</Typography>
    {console.log(mockCart)}
    {items.map(
      item => item,
      //   <ProductItem product={c} key={c.id} />
    )}
  </Container>
);

export default connect(selectCart)(CartPage);
