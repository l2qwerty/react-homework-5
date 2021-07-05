import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    opacity: 0.9,
  },
  title: {
    flexGrow: 1,
  },
}));

function Links() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h5' className={classes.title}>
            <Link to='/'>Home</Link>
          </Typography>
          <Typography variant='h5' className={classes.title}>
            <Link to='/contacts'>Contacts</Link>
          </Typography>
          <Typography variant='h5' className={classes.title}>
            <Link to='/gadgets'>Electronics</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Links;
