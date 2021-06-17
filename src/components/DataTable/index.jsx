import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { useStyles } from "./style";

const THead = ({ columns }) => (
  <TableHead>
    <TableRow>
      {columns.map(item => (
        <TableCell key={item.field}>{item.title}</TableCell>
      ))}
      <TableCell>Action</TableCell>
    </TableRow>
  </TableHead>
);

const TBody = ({ data, columns, action }) =>
  data.map(item => (
    <TableRow key={item.id}>
      {columns.map(column => (
        <TableCell key={column.field}>
          <span> {item[column.field]}</span>
        </TableCell>
      ))}
      <TableCell>{action(item)}</TableCell>
    </TableRow>
  ));

export default function DataTable({ columns, data, action, loading }) {
  const classes = useStyles();
  return (
    <>
      <TableContainer component={Paper} elevation={0} className={classes.TableRoot}>
        <Table aria-label="simple table">
          <THead columns={columns} />

          <TableBody>
            {loading && (
              <TableRow rowSpan={columns.length + 1} align="center">
                <TableCell colSpan={columns.length + 1} align="center">
                  "None"
                </TableCell>
              </TableRow>
            )}
            <TBody data={data} columns={columns} action={action} />
          </TableBody>
        </Table>
      </TableContainer>

      {/*setPage && setPageSize && (
        <Grid item xs={12} container direction="row" justify="space-between" alignItems="center">
          <Grid item xs={1}>
            <Select selected={pageSize} setSelected={setPageSize} data={[10, 20, 50]} />
          </Grid>
          {pageSize && (
            <Grid item xs={5}>
              <Pagination
                count={totalPage}
                color="primary"
                page={page}
                onChange={(event, value) => setPage(value)}
              />
            </Grid>
          )}
        </Grid>
          ) */}
    </>
  );
}
