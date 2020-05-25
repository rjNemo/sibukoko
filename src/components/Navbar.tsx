import React from 'react';
// UI
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import useStyles from '../constants/styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <ChildCareIcon />
        <Typography variant="h6" className={classes.title}>
          Sibukoko
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
