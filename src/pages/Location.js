import React from 'react';
import { GET_LOCATIONS_BY_ID } from '../queries';
import { useQuery } from '@apollo/react-hooks';
import { useHistory, useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { LocationsCard } from '../components';
import Skeleton from '@material-ui/lab/Skeleton';

function Location() {
  const { id } = useParams();
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_LOCATIONS_BY_ID, { variables: { id: id } });

  if (error?.message.includes('404')) {
    history.push('/not-found');
    return null;
  }

  return (
    <Container maxWidth="lg">
      {loading ? (
        <Container maxWidth="md">
          <Skeleton variant="rect" height={300} />
        </Container>
      ) : (
        <LocationsCard location={data?.location} loading={loading} />
      )}
    </Container>
  );
}

export default Location;
