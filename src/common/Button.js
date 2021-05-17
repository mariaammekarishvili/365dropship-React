
const Button = (props) => {
    return(
        <>
            <button type="button" className={'button' + (props.big ? ' button--big' : '')} onClick="">{props.title}</button>
        </>
    )
}

export default Button