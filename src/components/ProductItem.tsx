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
import {Link} from 'react-router-dom';
import Routes from '../constants/routes';

const ProductItem: FC<{product: IProduct}> = ({
  product: {id, name, picture, price},
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={6} className={classes.productItem}>
      <Card>
        <Link to={`${Routes.PRODUCTS}/${id}`} className={classes.link}>
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
        </Link>
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
