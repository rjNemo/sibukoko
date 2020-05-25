import React, {FC} from 'react';
// Redux
import {connect} from 'react-redux';
import {selectProducts} from '../../store/product';
// Routing
import {useParams} from 'react-router-dom';
// UI
import {Container, CardMedia, Typography, Button} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import useStyles from '../../constants/styles';

import IProduct from '../../models/IProduct';

const ProductDetailsPage: FC<{product: IProduct}> = ({
  product: {name, picture, price},
}) => {
  const classes = useStyles();

  return (
    <Container>
      <CardMedia className={classes.media} image={picture} title={name} />
      <Typography variant="h4" component="h2">
        name
      </Typography>
      <Typography gutterBottom variant="body1" component="h4">
        {price} €
      </Typography>
      <Button
        size="small"
        color="primary"
        startIcon={<AddShoppingCartIcon />}
        variant="contained"
      >
        Add To Cart
      </Button>
    </Container>
  );
};

const ProductDetailsContainer: FC<{products: IProduct[]}> = ({products}) => {
  const {pid} = useParams();
  const product = products.find(p => p.id === pid);
  // TODO: if product undefined return 404 page
  return !!product ? (
    <ProductDetailsPage product={product} />
  ) : (
    <div>not found</div>
  );
};

export default connect(selectProducts)(ProductDetailsContainer);
