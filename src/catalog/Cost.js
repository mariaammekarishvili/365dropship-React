const Cost = ({price,text,catalog}) => {
    return(
        <div className={'cost__box' + ( catalog ? ' catalog__cost-box' : '')}>
            <p className={'cost__price'}>${price}</p>
            <p className={'cost__text'}>{text}</p>
        </div>
    )
}

export default Cost