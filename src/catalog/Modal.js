import Cost from "./Cost";
import Button from "../common/Button";

const Modal = ({img,title,description,price}) => {
    return(
        <div className={'modal'}>
            <div className={'item-table'}>
                <div className={'item-table__representation'} >
                    <div className={'item__cost'}>
                        <Cost text={'RRP'} price={price}/>
                        <Cost text={'COST'} price={Math.round(price - (price * 0.2))}/>
                        <Cost price={Math.round(price * 0.2)} text={'PROFIT'}/>
                    </div>

                    <img className={'item-table__img'} src={img}/>
                </div>

                <div className={'item-table__information'}>
                    <h2 className={'information__titele'}>{title}</h2>
                    <Button title={'ADD TO INVENROTY'} big />
                    <h3>Description:</h3>
                    <p className={'information__description'}>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal