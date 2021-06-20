import Cost from "./Cost";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@material-ui/core";
import {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom'

const Modal = ({openId}) => {

    const [open, setOpen] = useState(openId)
    const history = useHistory()
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(`http://fakestoreapi.com/products/${openId}`)
            .then(res => res.json())
            .then(res => {
                setProduct(res)
                setOpen(openId)
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


    console.log(product)
    return(
     <>
        {/*<div className={'modal'}>*/}
        {/*</div>*/}
        {/*    <div className={'item-table'}>*/}
        {/*        <div className={'item-table__representation'} >*/}
        {/*            <div className={'item__cost'}>*/}
        {/*                <Cost text={'RRP'} price={price}/>*/}
        {/*                <Cost text={'COST'} price={Math.round(price - (price * 0.2))}/>*/}
        {/*                <Cost price={Math.round(price * 0.2)} text={'PROFIT'}/>*/}
        {/*            </div>*/}

        {/*            <img className={'item-table__img'} src={img}/>*/}
        {/*        </div>*/}

        {/*        <div className={'item-table__information'}>*/}
        {/*            <h2 className={'information__titele'}>{title}</h2>*/}
        {/*            <Button title={'ADD TO INVENROTY'} big />*/}
        {/*            <h3>Description:</h3>*/}
        {/*            <p className={'information__description'}>{description}</p>*/}
        {/*        </div>*/}
        {/*     </div>*/}

         <Dialog open={open} onClose={closeDialog} >
                 <div className={'item-table'}>
                     <div className={'item-table__representation'} >
                         <div className={'item__cost'}>
                             <Cost text={'RRP'} price={product.price}/>
                             <Cost text={'COST'} price={Math.round(product.price - (product.price * 0.2))}/>
                             <Cost price={Math.round(product.price * 0.2)} text={'PROFIT'}/>
                         </div>

                         <img className={'item-table__img'} src={product.image}/>
                     </div>

                     <div className={'item-table__information'}>
                         <h2 className={'information__titele'}>{product.title}</h2>
                         <Button variant="contained"
                                 color="primary">ADD INVENTORY</Button>
                         <h3>Description:</h3>
                         <p className={'information__description'}>{product.description}</p>
                     </div>
             {/*<DialogTitle>{product.title}</DialogTitle>*/}
             {/*<DialogContent>*/}
             {/*    <Typography gutterBottom>*/}
             {/*        {product.description}*/}
             {/*    </Typography>*/}
             {/*</DialogContent>*/}
             {/*<DialogActions>*/}
             {/*    <button color='primary' variant='contained'>*/}
             {/*        ADD TO INVENTORY*/}
             {/*    </button>*/}
             {/*</DialogActions>*/}
                 </div>
         </Dialog>
     </>
    )
}

export default Modal