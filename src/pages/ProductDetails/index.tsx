import React, {FC} from 'react';
// Redux
import {connect} from 'react-redux';
import {selectProducts} from '../../store/product';
// Routing
import {useParams, Link as RouterLink} from 'react-router-dom';
// UI
import {
  Container,
  CardMedia,
  Typography,
  Button,
  Grid,
} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import useStyles from '../../constants/styles';

import IProduct from '../../models/IProduct';
import Routes from '../../constants/routes';

const ProductDetailsPage: FC<{product: IProduct}> = ({
  product: {name, picture, price, description},
}) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={12} sm={6}>
          <CardMedia className={classes.media} image={picture} title={name} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" component="h2">
            {name}
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
        </Grid>
      </Grid>
      <Typography gutterBottom variant="body2" component="h4">
        {description}
      </Typography>
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
};

const ProductDetailsContainer: FC<{products: IProduct[]}> = ({products}) => {
  const {pid} = useParams();
  const product = products.find(p => p.id === pid);
  // TODO: if product undefined return 404 page
  return !!product ? <ProductDetailsPage product={product} /> : null;
};

export default connect(selectProducts)(ProductDetailsContainer);
