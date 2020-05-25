import React, {FC} from 'react';
import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IProduct from '../models/IProduct';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ProductItem: FC<{product: IProduct}> = ({
  product: {name, picture, price},
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
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
  );
};

export default ProductItem;
