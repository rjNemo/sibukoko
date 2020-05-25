import React, {FC} from 'react';
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
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import useStyles from '../constants/styles';

import IProduct from '../models/IProduct';

const ProductItem: FC<{product: IProduct}> = ({
  product: {name, picture, price},
}) => {
  const classes = useStyles();
  return (
    <Grid xs={6} className={classes.productItem}>
      <Card>
        <CardActionArea>
          <CardMedia className={classes.media} image={picture} title={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">
              {name}
            </Typography>
            <Typography gutterBottom variant="body1" component="h4">
              {price} €
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            startIcon={<AddShoppingCartIcon />}
            variant="contained"
          >
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductItem;
