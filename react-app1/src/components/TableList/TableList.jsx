import React, { useState } from "react";
import {
  withStyles,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { AddList } from "../AddList";
import Appbar from "../Appbar";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const contactData = [
  {
    id: 1,
    name: "Kamakshi Dixit",
    address: "Gomti Nagar,Lucknow",
    gender: "Female",
    dob: "23-01-1998",
    description: "Details of mine",
  },
];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
}));

export default function TableList() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [tableRow, setTableRow] = useState(contactData);

  const handleSubmit = (e, contact) => {
    e.preventDefault();
    setTableRow([...tableRow, contact]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Appbar />
      <Paper>
        <div className={classes.dialog}>
          <AddList open={open} onClose={handleClose} onSubmit={handleSubmit} />
          <TableContainer component={Paper} style={{ marginTop: "30px" }}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">Address</StyledTableCell>
                  <StyledTableCell align="right">Gender</StyledTableCell>
                  <StyledTableCell align="right">DOB</StyledTableCell>
                  <StyledTableCell align="right">Description</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableRow.length > 0 ? (
                  tableRow.map((contact) => {
                    const { name, address, gender, dob, description } = contact;
                    return (
                      <StyledTableRow key={contact.id}>
                        <StyledTableCell component="th" scope="row">
                          {name}
                        </StyledTableCell>
                        <StyledTableCell component="th" align="right">
                          {address}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {gender}
                        </StyledTableCell>
                        <StyledTableCell align="right">{dob}</StyledTableCell>
                        <StyledTableCell align="right">
                          {description}
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })
                ) : (
                  <StyledTableRow>
                    <StyledTableCell colSpan={3}>No users</StyledTableCell>
                  </StyledTableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Paper>
    </div>
  );
}
