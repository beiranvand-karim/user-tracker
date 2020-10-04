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
        font-size: 14px;
`;

const TableStyled = styled(Table)`
    min-width: 100px;
    margin-top: 10px;
`;

export default function ListOfUsers() {

    const [users] = useState([])

    return (
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
                    {users.map((user, index) => (
                        <TableBody>
                            <TableRow key={index}>
                                <TableBodyCellStyled component="th" scope="row">
                                    <Checkbox color="default"/>
                                    {user.firstName + '  ' + user.lastName}
                                </TableBodyCellStyled>
                                <TableBodyCellStyled align="right">{user.email}</TableBodyCellStyled>
                                <TableBodyCellStyled align="right">{user.dateCreated}</TableBodyCellStyled>
                                <TableBodyCellStyled align="right">{user.dateModified}</TableBodyCellStyled>
                            </TableRow>
                        </TableBody>
                    ))}
                </TableStyled>
            </TableContainer>
    )
        ;
}