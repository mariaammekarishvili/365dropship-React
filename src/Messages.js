import {failedMessageAction, successMessageAction} from "./reducers/CommonReducers/CommonAction";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import React from 'react';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export  const Messages = () => {
    const classes = useStyles();
    const successOpen = useSelector(state => state.Messages.successMessage)
    const failedOpen = useSelector(state => state.Messages.failedMessage)
    const dispatch = useDispatch()


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(failedMessageAction(false));
        dispatch(successMessageAction(false));
    };

    return (
        <div className={classes.root}>
            <Snackbar className={'message'} open={successOpen} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>

            <Snackbar className={'message'} open={failedOpen} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    This is an error message!
                </Alert>
            </Snackbar>

            {/*<Alert severity="error">This is an error message!</Alert>*/}
            {/*<Alert severity="warning">This is a warning message!</Alert>*/}
            {/*<Alert severity="info">This is an information message!</Alert>*/}
            {/*<Alert severity="success">This is a success message!</Alert>*/}
        </div>
    );
}
