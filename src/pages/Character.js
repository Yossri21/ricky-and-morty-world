import React from 'react';
import { GET_CHARACTERS_BY_ID } from '../queries';
import { useQuery } from '@apollo/react-hooks';
import { useHistory, useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { CharactersCard } from '../components';
import Skeleton from '@material-ui/lab/Skeleton';

export default function Character() {
  const { id } = useParams();
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_CHARACTERS_BY_ID, { variables: { id: id } });

  if (error?.message.includes('404')) {
    history.push('/not-found');
    return null;
  }

  return (
    <div>
      <Container maxWidth="lg">
        {loading ? (
          <Container maxWidth="md">
            <Skeleton variant="rect" height={300} />
          </Container>
        ) : (
          <CharactersCard character={data?.character} loading={loading} />
        )}
      </Container>
    </div>
  );
}
