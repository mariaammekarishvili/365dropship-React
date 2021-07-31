import {useEffect, useState} from "react";
import {getAllUser} from "../API/UserAPI";
import {useSelector} from "react-redux";
import '../CSS/UsersTablePage.css'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Navigation from "../common/Navigation";
import {Hidden} from "@material-ui/core";
import group from "../img/group.png";
import {UsersTableHead} from "./UsersTableHead";
import {UsersTableBody} from "./UsersTableBody";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const UsersInformationPage = () => {
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

                <div className={'userPage__title'}>
                    <img className={'cart__title--icon users__icon'}
                         src={group}/>
                    <h2>Users ({allUser.length}) </h2>
                </div>

                <TableContainer className={'users__table--box'}
                                component={Paper}>
                <br/>
                <Table className={classes.table}
                       aria-label="simple table">

                    <UsersTableHead/>
                    <UsersTableBody allUser={allUser}/>

                 </Table>
                </TableContainer>
            </div>
          </>
        );
}

export default UsersInformationPage
