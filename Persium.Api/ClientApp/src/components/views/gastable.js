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
    // minWidth: 650,
    fontSize :'12px'
  },
});




export default function GasTable({sniffer}) {
    
  const classes = useStyles();
  const rows = Object.entries(sniffer).filter(k=>k[0].indexOf("s")==0  && k[1]!=null).map(s=>s[1]);
  
  return (
    <TableContainer component={Paper}>
      <Table size="small" className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Gas</TableCell>
            <TableCell >ppm</TableCell>
            <TableCell >&micro;g/m<sup>3</sup></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.type}
              </TableCell>
              <TableCell >{row.ppm}</TableCell>
              <TableCell >{row.cubicMetter}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
