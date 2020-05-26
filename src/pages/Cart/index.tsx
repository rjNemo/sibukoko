import React, {FC} from 'react';
// Redux
import {connect} from 'react-redux';
import {selectCart} from '../../store/product';
//UI
import {Container, Typography} from '@material-ui/core';
import CartItem from '../../components/CartItem';

import ICart from '../../models/ICart';

const CartPage: FC<{cart: ICart}> = ({cart: {items}}) => (
  <Container>
    <Typography>Cart</Typography>
    {items.map(item => (
      <CartItem item={item} key={item.product.id} />
    ))}
  </Container>
);

export default connect(selectCart)(CartPage);
