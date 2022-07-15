import wave from '../../assets/svg/wavebottom.svg';
import waveDesktop from '../../assets/svg/waveBottomDesktop.svg';
import monitor from '../../assets/svg/monitor.svg';
import monitorDesktop from '../../assets/svg/monitorDesktop.svg';
import CSSsvg from '../../assets/svg/CSSsvg.svg';
import HTMLsvg from '../../assets/svg/HTMLsvg.svg';
import JSsvg from '../../assets/svg/JSsvg.svg';
import vuesvg from '../../assets/svg/vue-js.svg';
import logosvg from '../../assets/svg/react-2.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import github from '../../assets/svg/github.svg';
import instagram from '../../assets/svg/instagram.svg'

const Home = () => {
    return (
        <div className='home'>
            <div className='home__main'>
                <h1 className='home__name'>
                    Eduardo Gutiérrez
                </h1>
                <h2 className='home__subtitle'>Desarrollador Front End</h2>
                <div className='home__logos'>
                    <div className="logo">
                        <img src={logosvg} alt="react logo" />
                    </div>
                    <div className="logo">
                        <img src={vuesvg} alt="vue logo" />
                    </div>
                    <div className="logo">
                        <img src={CSSsvg} alt="css logo" />
                    </div>
                    <div className="logo">
                        <img src={HTMLsvg} alt="html logo" />
                    </div>
                    <div className="logo">
                        <img src={JSsvg} alt="js logo" />
                    </div>
                </div>
            </div>
            <picture className='monitor' >
                <source srcSet={monitorDesktop} media="(min-width: 600px)" />
                <img className='monitor__image' src={monitor} alt="monitor.svg" />
            </picture>
            <div className="socials">
                <a className="socials__social" href='https://github.com/Eduardo-gutz' target='_blank' rel="noreferrer">
                    <img src={github} alt="github link" />
                </a>
                <a className="socials__social" href='https://www.instagram.com/eduardo.gutzfl/' target='_blank' rel="noreferrer">
                    <img src={instagram} alt="instagram link" />
                </a>
                <a className="socials__social" href='https://www.linkedin.com/in/eduardogutierrezfl' target='_blank' rel="noreferrer">
                    <img src={linkedin} alt="linkedin link" />
                </a>
            </div>
            <picture>
                <source srcSet={waveDesktop} media="(min-width: 600px)" />
                <img className='home__wave' src={wave} alt="wave" />
            </picture>
        </div>
    )
}

export default Home;