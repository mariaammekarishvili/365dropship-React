import React, {useState} from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {useDispatch, useSelector} from "react-redux";
import {
    failedMessageAction,
    headerModalOpenAction,
    successMessageAction
} from "../reducers/CommonReducers/CommonAction";
import '../assets/CSS/Header.css'
import {deleteProduct} from "../API/ProductAPI";
import {editProductAction, refreshStateAction, unselectAllIdAction} from "../reducers/ProductReducer/ProductActions";
import {useStyles} from "../assets/CSS/ModalStyle";
import {useHistory} from "react-router-dom";

export default function ItemRemoveModal() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const open = useSelector(state => state.headerModal.headerModalOpen)
    const selectedId = useSelector(state => state.products.selectedId)
    const refresh = useSelector(state => state.products.needRefresh)
    const history = useHistory()
    const handleClose = () => {
        dispatch(headerModalOpenAction(false))
    }

    const removeProduct = async() => {
        for(let i = 0; i < selectedId.length; i++){
            const response = await deleteProduct(selectedId[i]).then(r => {
                    dispatch(successMessageAction(true))
                     dispatch(editProductAction(false))
                    history.push('/catalog')
                }
            ).catch(err => dispatch(failedMessageAction(true)))}
        dispatch(headerModalOpenAction(false))
        dispatch(refreshStateAction(!refresh))
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
                        <button onClick={handleClose}
                                className={'modal__butt--grey button'}>No
                        </button>
                        <button onClick={removeProduct}
                                className={'modal__butt--clasic button'}>Yes
                        </button>
                    </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
