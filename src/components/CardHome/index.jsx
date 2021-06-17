import React from 'react';
import { Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import useStyles from './styles';


const CardHome = props => {
  const classes = useStyles();

  const { title, link, image } = props;

  const history = useHistory();

  const handleNavigation = () => {
    history.push(link);
  };
  return (
    <>
      <Card className={classes.root}>
        <div className={classes.media}>
          <Link className={classes.LinkCard} onClick={handleNavigation}>
            {title}
          </Link>
          <img alt={title} src={image} />
        </div>
      </Card>
    </>
  );
};

export default CardHome;
