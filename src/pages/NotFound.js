import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import img404 from '../assets/img/404errormessage.jpg';

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: '100%',
    height: 'auto',
    background: '#000000',
    display: 'flex',
    alignItems: 'center',
    minHeight: '100vh',
  },
  mainContainer: {
    textAlign: 'center',
    '& img': {
      width: '100%',
      maxWidth: '600px',
      height: 'auto',
    },
  },
}));

function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container maxWidth="md" className={classes.mainContainer}>
        <img alt="404" src={img404} />
      </Container>
    </div>
  );
}

export default NotFound;
