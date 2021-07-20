import {useSelector} from "react-redux";

export const UserStatus = () => {
    const userInformation = useSelector(state => state.ProfileReducer.fullInformation)
    const isAdmin = userInformation.isAdmin
    return(
        <div className={'user-status__box'}>
            <div className={'user-status'  + (isAdmin ? ' active-status' : '')}>Administrator</div>
            <div className={`user-status ` + (isAdmin ? '' :  'active-status')}>User</div>
        </div>
    )
}