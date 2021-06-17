import React, { useState } from 'react';
import { GET_LOCATIONS } from '../queries';
import { useQuery } from '@apollo/react-hooks';
import { Button, Container, Typography } from '@material-ui/core';
import CustomTable from '../components/DataTable';
import { useHistory } from 'react-router-dom';
import { useStyles } from './style';
import { Pagination } from '../components';
import CircularProgress from '@material-ui/core/CircularProgress';

function Locations() {
  const classes = useStyles();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState([]);
  const { loading, data } = useQuery(GET_LOCATIONS, { variables: { page: page } });
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(2);
  const [total, setTotal] = useState(0);

  const columns = [
    { title: 'Name', field: 'name' },
    { title: 'Type', field: 'type' },
    { title: 'Dimension', field: 'dimension' },
  ];

  React.useEffect(() => {
    if (data) {
      setRows(data.locations.results);
      setPrev(data.locations.info.prev);
      setNext(data.locations.info.next);
      setTotal(data.locations.info.count);
    }
  }, [data]);

  const redirect = url => history.push(url);

  return (
    <>
      <Container maxWidth="md" className={classes.mainContainer}>
        <Typography component="h1" variant="h5" className={classes.TitlePage}>
          Locations {loading && <CircularProgress color="primary" />}
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
                  onClick={() => redirect(`/locations/${item.id}`)}
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

export default Locations;
