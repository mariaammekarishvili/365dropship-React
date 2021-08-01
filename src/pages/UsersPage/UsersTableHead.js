import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import React from "react";

export const UsersTableHead = () => {
    return(
        <>
            <TableHead className={'user__table--head'}>
                <TableRow>
                    <TableCell align="center">ID</TableCell>
                    <TableCell align="left">First Name</TableCell>
                    <TableCell align="left">Last Name</TableCell>
                    <TableCell align="left">E-mail(g)</TableCell>
                    <TableCell align="left">Admin</TableCell>
                    <TableCell align="center"> </TableCell>

                </TableRow>
            </TableHead>
        </>
    )
}