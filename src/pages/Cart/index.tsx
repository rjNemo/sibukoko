import React, {FC} from 'react';
// Redux
import {connect} from 'react-redux';
import {selectCart} from '../../store/product';
// Rputing
import {Link as RouterLink} from 'react-router-dom';
import Routes from '../../constants/routes';
//UI
import {Container, Typography, Button} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PaymentIcon from '@material-ui/icons/Payment';
import CartItem from '../../components/CartItem';

import ICart from '../../models/ICart';

const CartPage: FC<{cart: ICart}> = ({cart: {items}}) => (
  <Container>
    <Typography variant="h4" component="h2">
      Cart
    </Typography>
    <Button
      size="small"
      color="secondary"
      startIcon={<PaymentIcon />}
      variant="contained"
      component={RouterLink}
      to={Routes.HOME}
    >
      Proceed to Checkout
    </Button>
    {items.map(item => (
      <CartItem item={item} key={item.product.id} />
    ))}
    <Button
      size="small"
      color="primary"
      startIcon={<ArrowBackIcon />}
      variant="outlined"
      component={RouterLink}
      to={Routes.HOME}
    >
      Back to list
    </Button>
  </Container>
);

export default connect(selectCart)(CartPage);
