import {makeStyles, Theme, createStyles} from '@material-ui/core';

/**
 * encapsulate reused interface styles
 */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    productItem: {
      maxWidth: 345,
      margin: theme.spacing(2, 0),
    },
    media: {
      height: 140,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default useStyles;
