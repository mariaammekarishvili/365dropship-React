
const Button = (props) => {
    return(
        <>
            <button type="button"
                    className={'button' + (props.big ? ' button--big' : '')} >
                {props.title}
            </button>
        </>
    )
}

export default Button