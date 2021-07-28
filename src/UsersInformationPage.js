import {useEffect, useState} from "react";
import {getAllUser} from "./API/UserAPI";
import {useDispatch, useSelector} from "react-redux";
import {getAllUserInfo, getAllUserInfoAction} from "./reducers/UsersReducer/UsersAction";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Navigation from "./common/Navigation";
import {Hidden} from "@material-ui/core";
import headerCart from "./img/shopping-cart.png";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];


const UsersInformationPage = () => {
    const dispatch = useDispatch()
    const [allUser,serAllUser ]= useState([])
    const classes = useStyles();

    useEffect(() => {
        getAllUser().then(r => {
            const list = r.slice(0, 50)
            serAllUser(list)
            console.log(allUser)
        })
    },[])


        return (
            <>
            <Hidden xsDown><Navigation/></Hidden>
                <div className={'cart__title'}><img className={'cart__title--icon'} src={headerCart}/><h2>Users ({allUser.length}) </h2> </div>

                <TableContainer className={'users__table--box'} component={Paper}>
                <br/>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead className={'user__table--head'}>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">E-mail(g)</TableCell>
                            <TableCell align="right">Admin</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allUser.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.firstName}</TableCell>
                                <TableCell align="right">{row.lastName}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{`${row.isAdmin}`}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </>
        );
}

export default UsersInformationPage
