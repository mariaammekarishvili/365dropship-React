import CatalogItem from "./CatalogItem";
import React from 'react';
import picture1 from '../img/man.jpg';
import picture2 from '../img/balerin.jpg';
import picture3 from '../img/prodact01.jpg';
import picture4 from '../img/girl.jpg';


const CatalogSection = () => {
    return(
        <>
            <div class="catalog">

                 <CatalogItem title={'RAM'}  price={'35'} img={picture1}/>
                 <CatalogItem title={'Dancer sculpture'}  price={'75'} img={picture2}/>
                 <CatalogItem title={'Man sculpture'}  price={"31"} img={picture3}/>
                 <CatalogItem title={'ballerina sculpture'}  price={"31"} img={picture4}/>

            </div>
         </>
    )
}

export default CatalogSection