import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    maxWidth: "100%"
  },
});

function DenseTable({ballotDropOffEvent, ballotDropOffDate, ballotByMailEvent, ballotByMailDate, ballotInPersonEvent, ballotInPersonDate, generalElectionEvent, generalElectionDate}) {
  const classes = useStyles();

  const createData = (event, date, reminder) => {
    return { event, date, reminder };
  }
  
  const rows = [
    createData(ballotDropOffEvent, ballotDropOffDate, "Reminder? Checkbox here for either texting or setting to google calendar"),
    createData(ballotByMailEvent, ballotByMailDate, "Reminder? Checkbox here for either texting or setting to google calendar"),
    createData(ballotInPersonEvent, ballotInPersonDate, "Reminder? Checkbox here for either texting or setting to google calendar"),
    createData(generalElectionEvent, generalElectionDate, "Reminder? Checkbox here for either texting or setting to google calendar")
  ];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Events</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Set Reminder</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {row.event}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.reminder}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DenseTable;