import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import PaginationButton from './PaginationButton';

const useStyles = makeStyles(theme => ({
  pagination: {
    display: "flex",
    width: '100%',
    justifyContent: "space-between",
    alignItems: "center"
  },
  container: {
    padding: "15px 35px",
  },
  paginationNum: {
    fontSize: "14px",
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    "& span": {
      fontWeight: "bold"
    }
  }

}));

const Pagination = ({ prev, next, handleClick , total }) => {
  const { pagination, container, paginationNum } = useStyles()
  return (
    <div className={container}>
      <div className={pagination}>
        <Typography variant="body" className={paginationNum}>
          Showing  <span>20</span> of <span>{total}</span> items

        </Typography>
        <div>
          <PaginationButton onClick={() => handleClick(prev)} disabled={!prev} title="Previous" />
          <PaginationButton onClick={() => handleClick(next)} disabled={!next} title="Next" />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
