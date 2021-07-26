import {useSelector} from "react-redux";
import check from '../img/check.png'

export const UserStatus = () => {
    const userInformation = useSelector(state => state.ProfileReducer.fullInformation)
    const isAdmin = userInformation.isAdmin
    return(
        <div className={'user-status__box'}>
            <div className={'user-status'  + (isAdmin ? ' active-status' : '')}>
                {isAdmin && <img className={'check-icon'} src={check}/>}
                Administrator</div>
            <div className={`user-status ` + (isAdmin ? '' :  'active-status')}>
                {!isAdmin && <img className={'check-icon'} src={check}/>}
                User</div>
        </div>
    )
}