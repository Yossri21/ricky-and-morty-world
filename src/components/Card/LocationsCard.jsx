import React from 'react';
import { Card, Container } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const LocationsCard = ({ location, loading }) => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md" className={classes.mainContainer}>
        <Card className={classes.root}>
          <CardContent>
            <Typography component="h1" variant="h5" className={classes.TitleCard}>
              {location.name}
            </Typography>
            <Typography component="h3" variant="h5" className={classes.subTitleCard}>
              {location.dimension}
            </Typography>
            <div className={classes.listCard}>
              <ul>
                <li>Type: {location.type}</li>
                <li> {`Created: ${new Date(location.created).toDateString()} `}</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        <Typography component="h1" variant="h5" className={classes.TitlePage}>
          Characters :
        </Typography>

        <div className={classes.listEpisodes}>
          <ul>
            {location.residents.map(res => (
              <li className={classes.episodeItem}>
                <Link to={`/characters/${res.id}`}>{res.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
};

export default LocationsCard;
