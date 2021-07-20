import '../CSS/Profile.css'
import star from '../img/star-ico.ico'
import emptyStar from '../img/star-empty.ico'
export const RatingStars = () => {
   return(
        <div className={'rating-stars'}>
            <span className={'star__span'}>8,3</span>
            <img src={star}/>
            <img src={star}/>
            <img src={star}/>
            <img src={emptyStar}/>
            <img src={emptyStar}/>

        </div>
   )
}