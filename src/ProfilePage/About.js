import icon from '../img/p.png'
import desc from '../img/description.png'

export const About = ({description}) => {
    return(
        <>
        <div className={'about__box'}>
            {description ?
                <>
                    <img className={'about_icon'} src={desc}/>
                    <p className={'about_script'}>Description</p>
                </>
                :
                <>
                    <img className={'about_icon'} src={icon}/>
                    <p className={'about_script'}>About</p>
                </>

            }
        </div>
            <hr/>
        </>
    )
}
