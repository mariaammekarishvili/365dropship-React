
const NavigationItem = ({img,round}) => {
    return(
    <img className={'Navigation-item__img' + ( round ? ' Navigation-item__img--round' : '')} src={img} />
    )
}

export default NavigationItem