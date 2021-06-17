import { Container, Grid } from '@material-ui/core';
import React from 'react';
import CardHome from '../components/CardHome';
import { useStyles } from './style';
import character from '../assets/img/characters.jpg';
import episodes from '../assets/img/episodes.jpg';
import locations from '../assets/img/locations.jpg';

const Services = [
  {
    title: 'Characters',
    image: character,
    link: '/characters',
  },
  {
    title: 'Episodes',
    image: episodes,
    link: '/episodes',
  },
  {
    title: 'Locations',
    image: locations,
    link: '/locations',
  },
];

function Dashboard() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.mainContainerHome}>
        <Grid container className={classes.root} spacing={3}>
          {Services.map(serviceItem => (
            <Grid item xs={4}>
              <CardHome
                title={serviceItem.title}
                image={serviceItem.image}
                link={serviceItem.link}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Dashboard;
