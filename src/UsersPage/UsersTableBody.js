import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {userDelete} from "../API/UserAPI";
import {failedMessageAction, successMessageAction} from "../reducers/CommonReducers/CommonAction";
import {refreshStateAction} from "../reducers/ProductReducer/ProductActions";
import TableBody from "@material-ui/core/TableBody";
import React from "react";
import {useDispatch, useSelector} from "react-redux";

export const UsersTableBody = ({allUser}) => {
    const refresh = useSelector(state => state.products.needRefresh)
    const dispatch = useDispatch()

    return(
        <>
            <TableBody>
                {allUser.map((row) => (
                    <TableRow key={row.id}>
                        <TableCell component="th" scope="row" align="center">
                            {row.id}
                        </TableCell>
                        <TableCell align="left">{row.firstName}</TableCell>
                        <TableCell align="left">{row.lastName}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="left">{`${row.isAdmin}`}</TableCell>
                        <TableCell align="center">
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
        </>
    )
}