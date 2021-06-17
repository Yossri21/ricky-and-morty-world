import React, { useState } from 'react';
import { GET_EPISODES } from '../queries';
import { useQuery } from '@apollo/react-hooks';
import { Button, Container, Typography } from '@material-ui/core';
import CustomTable from '../components/DataTable';
import { useHistory } from 'react-router-dom';
import { useStyles } from './style';
import { Pagination } from '../components';
import CircularProgress from '@material-ui/core/CircularProgress';

function Episodes() {
  const classes = useStyles();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState([]);
  const { loading, data } = useQuery(GET_EPISODES, { variables: { page: page } });
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(2);
  const [total, setTotal] = useState(0);

  const columns = [
    { title: 'Name', field: 'name' },
    { title: 'Episode', field: 'episode' },
    { title: 'Air date', field: 'air_date' },
  ];
  React.useEffect(() => {
    if (data) {
      setRows(data.episodes.results);
      setPrev(data.episodes.info.prev);
      setNext(data.episodes.info.next);
      setTotal(data.episodes.info.count);
    }
  }, [data]);

  const redirect = url => history.push(url);

  return (
    <>
      <Container maxWidth="md" className={classes.mainContainer}>
        <Typography component="h1" variant="h5" className={classes.TitlePage}>
          Episodes {loading && <CircularProgress color="primary" />}
        </Typography>

        {!loading && (
          <>
            <CustomTable
              loading={loading}
              action={item => (
                <Button
                  className={classes.btnView}
                  variant="outlined"
                  color="primary"
                  onClick={() => redirect(`/episodes/${item.id}`)}
                >
                  View
                </Button>
              )}
              columns={columns}
              data={rows}
            />
            <Pagination prev={prev} next={next} total={total} handleClick={setPage} />
          </>
        )}
      </Container>
    </>
  );
}

export default Episodes;
