import picture4 from './img/girl.jpg';

const CatalogItem = ({title,price}) => {
    return (
        <div className={'catalog__product'}>
            <div className="catalog__photo">
                <img src={picture4}/>
            </div>
            <div className="catalog__title">
                {title}
            </div>
            <div className="catalog__price">
                {price}
            </div>
        </div>
    )
}

export default CatalogItem