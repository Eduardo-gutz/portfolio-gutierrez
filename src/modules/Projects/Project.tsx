import { useRef, useState } from "react";
import Card from "../../components/card/Card";
import Carousel from "../../components/carousel/Carousel"
import CTALink from "../../components/cta-link/CTALink";
import Paragraph from "../../components/paragraph/Paragraph";
import Title from "../../components/title/Title";
import { Project } from "../../interfaces/projects"
import KeyValue from "./components/KeyValue";
import Subtitle from "./components/Subtitle";

interface ProjectProps {
    project: Project
    goback: () => void
}

const ProjectView = ({ project, goback }: ProjectProps) => {
    const [imagesUrlsSelected, setImagesUrlsSlected] = useState<string[]>(project.images.desktop);
    const devicesRef = useRef<HTMLDivElement>(null);

    const activeDeviceIcon = (target: any, device: 'MOBILE' | 'TAB' | 'DESK') => {
        if(devicesRef.current) {
            let leftParent = devicesRef.current.getBoundingClientRect().left;
            let leftItem = target.getBoundingClientRect().left;
            let move = leftItem - leftParent + 3
            
            devicesRef.current.style.setProperty('--move-left', `${move}px`);
        }

        switch (device) {
            case 'DESK':
                setImagesUrlsSlected(project.images.desktop);
                break;
            case 'TAB':
                setImagesUrlsSlected(project.images.tablet);
                break;
            default:
                setImagesUrlsSlected(project.images.mobile);
                break;
        }
    }

    const navigateOut = (url: string) => {
        window.open(url, '_balnk');
    }

    return (
        <div className="project">
            <span className="goback" onClick={goback}>
                <i className='bx bx-left-arrow-alt' />
            </span>
            <Carousel items={imagesUrlsSelected} />
            <div className="devices" ref={devicesRef}>
                <i className='bx bx-laptop' onClick={(e) => activeDeviceIcon(e.target, 'DESK')} />
                <i className='bx bx-mobile-alt' onClick={(e) => activeDeviceIcon(e.target, 'MOBILE')} />
                <i className='bx bx-mobile-alt bx-rotate-270' onClick={(e) => activeDeviceIcon(e.target, 'TAB')} />
            </div>
            <Card>
                <article className="details">
                    <span className="details__cta">
                        <CTALink
                            label={'Visitar'}
                            icon={'right-arrow-alt'}
                            action={() => navigateOut(project.link)}
                            secondary
                        />
                    </span>
                    <Title>
                        { project.projectName }
                    </Title>
                    <Subtitle text={ 'Descripción' }/>
                    <Paragraph>
                        { `${project.description}` }
                    </Paragraph>
                    <Subtitle text={ 'Tecnologias' }/>
                    <ul className="paragraph">
                        { project.tecnologies.map((tec) => (
                            <KeyValue label={tec.type} value={tec.name} link={tec.link} />
                        )) }
                    </ul>
                    <Subtitle text={ 'Roles' }/>
                    <ul className="paragraph">
                        { project.roles.map((role) => (
                            <KeyValue label={role.role} value={role.description} />
                        )) }
                    </ul>
                </article>
            </Card>
        </div>
    )
}

export default ProjectView