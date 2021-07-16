import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {useDispatch, useSelector} from "react-redux";
import {headerModalOpenAction} from "../reducers/CommonReducers/HeaderModalDispatch";
import '../CSS/Header.css'
import {deleteProduct} from "../API";
import {unselectAllIdAction} from "../reducers/SelectReducer/SelectDispatch";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        border: "none"
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderRadius: 5,
        border: "none"
    },
}));

export default function HeaderModal() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const open = useSelector(state => state.headerModal.headerModalOpen)
    const selectedId = useSelector(state => state.select.selectedId)

    const handleClose = () => {
        dispatch(headerModalOpenAction(false))
    }

    const removeProduct = async() => {
        for(let i = 0; i < selectedId.length; i++){
            const response = await deleteProduct(selectedId[i]).then(r =>
                alert('Product Delete')
            ).catch(err => alert(err.message))}
        dispatch(headerModalOpenAction(false))
        dispatch(unselectAllIdAction([]))
        }



    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Remove Item</h2>
                        <p id="transition-modal-description">Are you sure you want to delete the product?</p>
                    <div className={'modal__box--butt'}>
                        <button onClick={handleClose} className={'modal__butt--grey button'}>No</button>
                        <button onClick={removeProduct} className={'modal__butt--clasic button'}>Yes</button>
                    </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
