import React, {useState} from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Checkbox} from "@material-ui/core";

const StyledTableCell = withStyles({
    head: {
        background: '#CED2AA',
        fontSize: "large",
    },
    body: {
        fontSize: 14,
    },
})(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hoverOpacity,
        },
    }
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 100,
    },
    footer: {
        background: '#CED2AA',
        display: "-ms-inline-flexbox",
    }
});

export default function Tables() {

    const classes = useStyles();

    const [rows] = useState([])

    return (
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Email</StyledTableCell>
                            <StyledTableCell align="right">Date Created</StyledTableCell>
                            <StyledTableCell align="right">Date Modified</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    {rows.map((row, index) => (
                        <TableBody>
                            <StyledTableRow key={index}>
                                <StyledTableCell component="th" scope="row"><Checkbox
                                    color={"default"}/> {row.firstName + '  ' + row.lastName}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.Email}</StyledTableCell>
                                <StyledTableCell align="right">{row.DateCreated}</StyledTableCell>
                                <StyledTableCell align="right">{row.DateModified}</StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    ))}
                </Table>
            </TableContainer>
            <div style={{padding: "20px", margin: "20px"}} className={classes.root}>
            </div>
        </div>
    )
        ;
}
