import { useContext, useEffect, useState } from "react";
import Card from "../../components/card/Card";
import CTALink from "../../components/cta-link/CTALink";
import Title from "../../components/title/Title";
import { portfolioContext } from "../../context/portfolio";
import { getProyects } from "../../firebase/projects";
import { Project } from "../../interfaces/projects";
import ProjectView from "./Project";
import texts from '../../assets/texts.json';

const Projects = () => {
    const [projectSelected, setProjectSelected] = useState<Project>();
    const { projects, setProjectsToContext } = useContext(portfolioContext);
    const t = texts.projects;

    useEffect(() => {
        const getAllProjects = async () => {
            const projects = await getProyects();
            console.log('get projects');
            
            setProjectsToContext(projects)
        }

        if(!projects.length) {
            getAllProjects();
        }
    }, [projects.length, setProjectsToContext]);
    
    return(
        projectSelected ?
            <ProjectView project={projectSelected} goback={() => setProjectSelected(undefined)} />
        :
            <main className="projects">
                <>
                    <Title>
                        { t.title }
                    </Title>
                    {projects.map((project) => (
                        <Card key={ project.id }>
                            <section className='projects__project'>
                                <span className='projects__title'>{ project.projectName }</span>
                                <img src={project.images.desktop[0]} alt={project.projectName} />
                                <span className="projects__cta">
                                    <CTALink
                                        label={ t.buttons.project }
                                        action={() => setProjectSelected(project)}
                                        secondary
                                    />
                                </span>
                            </section>
                        </Card>
                    ))}
                    { false &&
                        <CTALink
                            label={ t.buttons.more }
                            action={() => console.log('click en el call to action')}
                            secondary
                        />
                    }
                </>
            </main>
    )
}

export default Projects;