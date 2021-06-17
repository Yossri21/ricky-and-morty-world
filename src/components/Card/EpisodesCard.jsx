import React from 'react';
import { Card, Container } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const EpisodesCard = ({ episode, loading }) => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md" className={classes.mainContainer}>
        <Card className={classes.root}>
          <CardContent>
            <Typography component="h1" variant="h5" className={classes.TitleCard}>
              {episode.name}
            </Typography>
            <Typography component="h3" variant="h5" className={classes.subTitleCard}>
              {`${episode.episode}: ${episode.air_date}`}
            </Typography>
          </CardContent>
        </Card>
        <Typography component="h1" variant="h5" className={classes.TitlePage}>
          Characters :
        </Typography>

        <div className={classes.listEpisodes}>
          <ul>
            {episode.characters.map(ch => (
              <li className={classes.episodeItem}>
                <Link to={`/characters/${ch.id}`}>{ch.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
};

export default EpisodesCard;
