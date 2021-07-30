import {useEffect, useState} from "react";
import {getAllUser, userDelete} from "../API/UserAPI";
import {useDispatch, useSelector} from "react-redux";
import '../CSS/UsersTablePage.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Navigation from "../common/Navigation";
import {Hidden} from "@material-ui/core";
import headerCart from "../img/shopping-cart.png";
import {failedMessageAction, successMessageAction} from "../reducers/CommonReducers/CommonAction";
import {refreshStateAction} from "../reducers/ProductReducer/ProductActions";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const UsersInformationPage = () => {
    const dispatch = useDispatch()
    const [allUser,serAllUser ]= useState([])
    const refresh = useSelector(state => state.products.needRefresh)
    const classes = useStyles();

    useEffect(() => {
        getAllUser().then(r => {
            const list = r.slice(0, 50)
            serAllUser(list)
        })
    },[refresh])


        return (
          <>
            <Hidden xsDown><Navigation/></Hidden>
            <div className={'users__table'}>

                <div className={'userPage__title'}><img className={'cart__title--icon'} src={headerCart}/><h2>Users ({allUser.length}) </h2> </div>

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
                            <TableCell align="right"> </TableCell>

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
                                <TableCell align="right">
                                    <button className={'button'}
                                            onClick={() => {
                                                userDelete(row.id).then(r => dispatch(successMessageAction(true)))
                                                    .catch(err => failedMessageAction(true))
                                                dispatch(refreshStateAction(!refresh))
                                            }}
                                    >Remove</button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                 </Table>
                </TableContainer>
            </div>
          </>
        );
}

export default UsersInformationPage
