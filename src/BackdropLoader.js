import React, {useState} from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch} from "react-redux";
import {runLoadingAction} from "./reducers/CommonReducers/CommonAction";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function SimpleBackdrop() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const open = useState(state => state.Common.runLoading)
    const handleClose = () => {
        dispatch(runLoadingAction(false))
    };
    const handleToggle = () => {
        dispatch(runLoadingAction(true))
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleToggle}>
                Show backdrop
            </Button>
            <Backdrop className={classes.backdrop} open={open}  transitionDuration={{ appear: 1000, enter: 10, exit: 2000 }}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}
