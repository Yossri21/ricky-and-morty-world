import React, { useState } from 'react';
import { GET_CHARACTERS } from '../queries';
import { useQuery } from '@apollo/react-hooks';
import { Button, Container, Typography } from '@material-ui/core';
import CustomTable from '../components/DataTable';
import { useHistory } from 'react-router-dom';
import { useStyles } from './style';
import { Pagination } from '../components';
import CircularProgress from '@material-ui/core/CircularProgress';

function Characters() {
  const classes = useStyles();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState([]);
  const { loading, data } = useQuery(GET_CHARACTERS, { variables: { page: page } });
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(2);
  const [total, setTotal] = useState(0);

  const columns = [
    { title: 'Name', field: 'name' },
    { title: 'Species', field: 'species' },
    { title: 'Origin', field: 'origin' },
    { title: 'Location', field: 'location' },
  ];

  React.useEffect(() => {
    if (data) {
      setRows(data.characters.results);
      setPrev(data.characters.info.prev);
      setNext(data.characters.info.next);
      setTotal(data.characters.info.count);
    }
  }, [data]);

  const redirect = url => history.push(url);

  return (
    <>
      <Container maxWidth="md" className={classes.mainContainer}>
        <Typography component="h1" variant="h5" className={classes.TitlePage}>
          Characters {loading && <CircularProgress color="primary" />}
        </Typography>

        {!loading && (
          <>
            <CustomTable
              loading={loading}
              action={item => (
                <Button
                  color="primary"
                  variant="outlined"
                  onClick={() => redirect(`/characters/${item.id}`)}
                  className={classes.btnView}
                >
                  View
                </Button>
              )}
              columns={columns}
              data={rows.map(item => ({
                ...item,
                origin: item.origin.name,
                location: item.location.name,
              }))}
            />
            <Pagination prev={prev} next={next} total={total} handleClick={setPage} />
          </>
        )}
      </Container>
    </>
  );
}

export default Characters;
