import React, {useState} from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Add from "./add";
import Button from "@material-ui/core/Button";
import {Checkbox} from "@material-ui/core";



const StyledTableCell = withStyles((theme) => ({
    head: {
        // color: theme.palette.common.black,
        background: '#CED2AA',
        fontSize: "large",
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

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


export default function Users() {
    const classes = useStyles();
    var indexes = [];
    var i = 0;

    // create  a simple object for saving and using
    const [rows, setRows] = useState([])

    // get date from add component, and save in Users component
    const addDate = (state) => {
        let i = state.length - 1;
        const values = [...rows];
        values[i] = state[i];
        setRows([...rows, values[i]]);
    }

    const setIndexes = (e , index) => {
        // console.log(indexes);
            indexes[i] = index;
            i++;
            console.log(indexes + '\t'  + 'is checked');
            console.log(rows);
    }


    // delete a User
    const deleteUser =(indexes)=> {

    }


    // create a table
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
                                    color={"default"}
                                    onChange={(e) => setIndexes(e,index)}/> {row.firstName + '  ' + row.lastName}
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


            {/*create footer for delete and add*/}

            <footer className={classes.footer}>
                <Button style={{marginRight: '80%'}} type={"button"} variant={"contained"} color={"secondary"}>delete
                    selected</Button>
                <Button  style={{marginLeft: '80%'}} type={"button"} variant={"contained"}
                        color={"primary"}>add User</Button>
            </footer>
            <Add add={addDate}/>
        </div>
    )
        ;
}
