import React from 'react';
// Routing
import {Link} from 'react-router-dom';
import Routes from '../constants/routes';
// UI
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import useStyles from '../constants/styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link to={Routes.HOME} className={classes.link}>
            <ChildCareIcon />
            Sibukoko
          </Link>
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          component={Link}
          to={Routes.CART}
          startIcon={<AddShoppingCartIcon />}
        >
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
