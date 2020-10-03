import React, {useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Checkbox} from "@material-ui/core";
import styled from 'styled-components'

const TableHeadCellStyled = styled(TableCell)`
        background: #CED2AA;  
        font-size : large;
`;
const TableBodyCellStyled = styled(TableCell)`
        font-size: 14;
`;

const TableStyled = styled(Table)`
    min-width: 100px;
    margin-top: 10px;
`;

export default function ListOfUsers() {

    const [rows] = useState([])

    return (
        <div>
            <TableContainer component={Paper}>
                <TableStyled aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableHeadCellStyled>Name</TableHeadCellStyled>
                            <TableHeadCellStyled align="right">Email</TableHeadCellStyled>
                            <TableHeadCellStyled align="right">Date Created</TableHeadCellStyled>
                            <TableHeadCellStyled align="right">Date Modified</TableHeadCellStyled>
                        </TableRow>
                    </TableHead>
                    {rows.map((row, index) => (
                        <TableBody>
                            <TableRow key={index}>
                                <TableBodyCellStyled component="th" scope="row"><Checkbox
                                    color={"default"}/> {row.firstName + '  ' + row.lastName}
                                </TableBodyCellStyled>
                                <TableBodyCellStyled align="right">{row.Email}</TableBodyCellStyled>
                                <TableBodyCellStyled align="right">{row.DateCreated}</TableBodyCellStyled>
                                <TableBodyCellStyled align="right">{row.DateModified}</TableBodyCellStyled>
                            </TableRow>
                        </TableBody>
                    ))}
                </TableStyled>
            </TableContainer>
            <div style={{padding: "20px", margin: "20px"}}>
            </div>
        </div>
    )
        ;
}
