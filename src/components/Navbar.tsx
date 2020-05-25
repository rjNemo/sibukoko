import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';
import ChildCareIcon from '@material-ui/icons/ChildCare';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

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
