import React, {FC} from 'react';
// Reduc
import {useDispatch} from 'react-redux';
import {deleteCartItem} from '../store/product';
// UI
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from '@material-ui/core';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import useStyles from '../constants/styles';

import ICartItem from '../models/ICart';

const CartItem: FC<{item: ICartItem}> = ({
  item: {
    product: {picture, id, name, price},
    quantity,
  },
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleRemove = (e: React.MouseEvent) => {
    dispatch(deleteCartItem(id));
  };

  return (
    <Grid item xs={12}>
      <Card key={id} className={classes.cartItem}>
        <CardActionArea className={classes.cartItem}>
          <CardMedia className={classes.media} image={picture} title={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              {name}
            </Typography>
            <Typography gutterBottom variant="body1" component="h4">
              {price} €
            </Typography>
            <Typography gutterBottom variant="body1" component="h4">
              Quantity: {quantity}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          {/* <Button
            size="small"
            color="primary"
            startIcon={<AddShoppingCartIcon />}
            variant="contained"
          >
            Increase
          </Button> */}
          <Button
            size="small"
            color="primary"
            startIcon={<RemoveShoppingCartIcon />}
            variant="outlined"
            onClick={handleRemove}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CartItem;
