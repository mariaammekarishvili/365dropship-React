import Cost from "./Cost";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@material-ui/core";
import {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom'
import {getProduct} from "../API/ProductAPI";
import {About} from "../pages/ProfilePage/About";
import {addToCart} from "../API/CartAPI";
import {useDispatch} from "react-redux";
import {failedMessageAction, successMessageAction} from "../reducers/CommonReducers/CommonAction";

const Modal = ({openId}) => {

    const [open, setOpen] = useState(false)
    const [qtyNumb, setQtyNumb] = useState(1)
    const [product, setProduct] = useState([])
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
       getProduct(openId).then(res => {
           setProduct(res)
       })
       if(openId){
           setOpen(true)
       }
    },[openId])

    const qtyNumberSelect = (e) => {
        if (e.target.value === 'plus') {
            setQtyNumb(qtyNumb + 1)
        } else if (e.target.value === 'minus') {
            if(qtyNumb > 1){
                setQtyNumb(qtyNumb - 1)
            }
        }
    }
    const addRequest = () => {
        addToCart(openId,qtyNumb).then(r => dispatch(successMessageAction(true)))
            .catch(err => dispatch(failedMessageAction(true)))
    }

    const closeDialog = () => {
        setProduct([])
        history.goBack()
        setOpen(false)
    }

    return(
     <>


         <Dialog open={open} onClose={closeDialog} >
                 <div className={'item-table'}>
                     <div className={'item-table__representation'} >
                         <div className={'item__cost'}>
                             <Cost text={'RRP'} price={product.price}/>
                             <Cost text={'COST'} price={Math.round(product.price - (product.price * 0.2))}/>
                             <Cost price={Math.round(product.price * 0.2)} text={'PROFIT'}/>
                         </div>

                         <img className={'item-table__img'} src={product.imageUrl}/>
                     </div>

                     <div className={'item-table__information'}>
                         <h2 className={'information__titele'}>{product.title}</h2>

                         <div className={'modal_qty'}>
                             <div className={'qty'}>
                                 <span>Quantity:</span>
                                 <button className={'qty__plus'}
                                         value={'plus'}
                                         onClick={qtyNumberSelect}> +
                                 </button>
                                 <div className={'qty__number'}>{qtyNumb}</div>
                                 <button className={'qty__minus'}
                                         onClick={qtyNumberSelect}
                                         value={'minus'}> -
                                 </button>
                             </div>
                         </div>

                         <Button color={"primary"}
                                 variant={'contained'}
                                 onClick={addRequest}>
                             ADD TO INVENTORY</Button>

                         <About description/>
                         <p className={'information__description'}>{product.description}</p>
                     </div>
                 </div>
         </Dialog>
     </>
    )
}

export default Modal