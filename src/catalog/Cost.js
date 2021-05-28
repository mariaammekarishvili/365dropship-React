const Cost = ({price,text}) => {
    return(
        <div className={'cost__box'}>
            <p className={'cost__price'}>${price}</p>
            <p className={'cost__text'}>{text}</p>
        </div>
    )
}

export default Cost