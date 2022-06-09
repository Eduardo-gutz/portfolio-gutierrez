import { useRef, useState } from "react";
import Carousel from "../../components/carousel/Carousel"
import { Project } from "../../interfaces/projects"

interface ProjectProps {
    project: Project
}

const ProjectView = ({ project }: ProjectProps) => {
    const [imagesUrlsSelected, setImagesUrlsSlected] = useState<string[]>(project.images.mobile);
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
    return (
        <>
        <Carousel items={imagesUrlsSelected} />
        <div className="devices" ref={devicesRef}>
            <i className='bx bx-mobile-alt' onClick={(e) => activeDeviceIcon(e.target, 'MOBILE')} />
            <i className='bx bx-mobile-alt bx-rotate-270' onClick={(e) => activeDeviceIcon(e.target, 'TAB')} />
            <i className='bx bx-laptop' onClick={(e) => activeDeviceIcon(e.target, 'DESK')} />
        </div>
        </>
    )
}

export default ProjectView