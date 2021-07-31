import {useDispatch, useSelector} from "react-redux";
import {openSimpleModalAction} from "../reducers/CommonReducers/CommonAction";
import {Fade} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // border: 'solid 2px grey',
        // borderRadius: '5px'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export const SimpleModal = () => {
    const open = useSelector(state => state.Common.simpleModal)
    const dispatch = useDispatch()
    const classes = useStyles()

    const handleClose = () => {
        dispatch(openSimpleModalAction(false))
    };


    return(
        <>
            <div>
                <SimpleModal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={'simple__modal'}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={'simple__modal--paper'}>
                            <p id="transition-modal-description">22</p>
                        </div>
                    </Fade>
                </SimpleModal>
            </div>
        </>
    )
}