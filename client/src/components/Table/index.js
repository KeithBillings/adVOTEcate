import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
  table: {
    maxWidth: "100%"
  },
});

function DenseTable({ballotDropOffEvent, ballotDropOffDate, ballotByMailEvent, ballotByMailDate, ballotInPersonEvent, ballotInPersonDate, generalElectionEvent, generalElectionDate}) {
  const classes = useStyles();

  const createData = (event, date, reminder) => {
    event = event.replace(/[_-]/g, " ");
    if (date.length === 10){
      let day = date.slice(-2);
      let month = date.slice(-5, -3);
      let year = date.slice(0,4);
      if (month === "01"){
        month = "January"
      }
      if (month === "02"){
        month = "February"
      }
      if (month === "03"){
        month = "March"
      }
      if (month === "04"){
        month = "April"
      }
      if (month === "05"){
        month = "May"
      }
      if (month === "06"){
        month = "June"
      }
      if (month === "07"){
        month = "July"
      }
      if (month === "08"){
        month = "August"
      }
      if (month === "09"){
        month = "September"
      }
      if (month === "10"){
        month = "October"
      }
      if (month === "11"){
        month = "November"
      }
      if (month === "12"){
        month = "December"
      }
      date = `${month} ${day}, ${year}`
      // console.log("date is: ", date);
    }
    return { event, date, reminder };
  }
  
  const rows = [
    createData(ballotDropOffEvent, ballotDropOffDate, 
      <Checkbox
        value="checkedA"
        inputProps={{ 'aria-label': 'Checkbox A' }}
      />
    ),
    createData(ballotByMailEvent, ballotByMailDate, 
      <Checkbox
        value="checkedB"
        inputProps={{ 'aria-label': 'Checkbox B' }}
      />
    ),
    createData(ballotInPersonEvent, ballotInPersonDate, 
      <Checkbox
        value="checkedC"
        inputProps={{ 'aria-label': 'Checkbox C' }}
      />
    ),
    createData(generalElectionEvent, generalElectionDate, 
      <Checkbox
        value="checkedD"
        inputProps={{ 'aria-label': 'Checkbox D' }}
      />
    )
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