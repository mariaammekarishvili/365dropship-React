import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import {failedMessageAction, successMessageAction} from "./reducers/CommonReducers/SnackbarActions";

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
// <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>Bottom-Left</Button>

export  const Messages = () => {
    const classes = useStyles();
    // const [open, setOpen] = React.useState(false);
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

    console.log(successOpen)


    return (
        <div className={classes.root}>
            {/*<Button variant="outlined" onClick={handleClick}>*/}
            {/*    Open success snackbar*/}
            {/*</Button>*/}
            <Snackbar className={'message'} open={successOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    This is a success message!
                </Alert>
            </Snackbar>

            <Snackbar className={'message'} open={failedOpen} autoHideDuration={6000} onClose={handleClose}>
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
