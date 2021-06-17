import { Button } from '@material-ui/core';
import React from 'react';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  btnPagination: {
    margin: " 5px 7px ",
    color: "#438845",
    border: "1px solid #438845",
    fontWeight: "bold",
    textTransform: "none",
  }
}));
const PaginationButton = ({ title, ...props }) => {
  const { btnPagination } = useStyles()
  return (
    <Button
      variant="outlined"
      color="primary"
      {...props}
      className={btnPagination}
    >

      {title}

    </Button>
  );
};

export default PaginationButton;
