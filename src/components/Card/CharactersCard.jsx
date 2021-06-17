import React from 'react';
import { Card, Container } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const CharactersCard = ({ character, loading }) => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md">
        <Card className={classes.root}>
          <div className={classes.media}>
            <img alt={character.name} src={character.image} />
          </div>

          <CardContent>
            <Typography component="h1" variant="h5" className={classes.TitleCard}>
              {character.name}
            </Typography>
            <Typography component="h3" variant="h5" className={classes.subTitleCard}>
              {`Created: ${new Date(character.created).toDateString()} `}
            </Typography>
            <div className={classes.listCard}>
              <ul>
                <li>gender: {character.gender}</li>
                <li>status: {character.status}</li>
                <li>origin: {character.origin.name}</li>
                <li>location: {character.location.name}</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        <Typography component="h1" variant="h5" className={classes.TitlePage}>
          Episodes :
        </Typography>

        <div className={classes.listEpisodes}>
          <ul>
            {character.episode.map(ep => (
              <li className={classes.episodeItem}>
                <Link to={`/episodes/${ep.id}`}>
                  [{ep.episode}] {ep.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
};

export default CharactersCard;
