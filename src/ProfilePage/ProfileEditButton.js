import {useDispatch} from "react-redux";
import {openEditAction} from "../reducers/ProfileReducer/ProfileActions";

export const ProfileEditButton = () => {
    const dispatch = useDispatch()

    const openModal = () => {
        dispatch(openEditAction(true))
    }

    return(
        <>
            <button className={'button profile-edit__butt'}
                    onClick={openModal}> Edit profile </button>
        </>
    )
}