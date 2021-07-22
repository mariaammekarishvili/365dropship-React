import icon from '../img/p.png'

export const About = () => {
    return(
        <>
        <div className={'about__box'}>
            <img className={'about_icon'} src={icon}/>
            <p className={'about_script'}>About</p>
        </div>
            <hr/>
        </>
    )
}
