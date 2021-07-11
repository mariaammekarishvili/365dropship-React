import Cost from "./Cost";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@material-ui/core";
import {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom'
import {getProduct} from "../API";

const Modal = ({openId}) => {

    const [open, setOpen] = useState(openId)
    const history = useHistory()
    const [product, setProduct] = useState([])

    useEffect(() => {
       getProduct(openId).then(res => {
           setProduct(res)
       })
    },[openId])

    const openDialog = () => {
        setOpen(true);
    }
    const closeDialog = () => {
        setProduct({})
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
                         {/*<Button variant="contained"*/}
                         {/*        color="primary">ADD INVENTORY</Button>*/}
                         <h3>Description:</h3>
                         <p className={'information__description'}>{product.description}</p>
                     </div>}
                 </div>
         </Dialog>
     </>
    )
}

export default Modal