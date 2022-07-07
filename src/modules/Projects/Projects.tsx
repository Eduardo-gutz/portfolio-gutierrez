import { useContext, useEffect, useState } from "react";
import Card from "../../components/card/Card";
import CTALink from "../../components/cta-link/CTALink";
import Title from "../../components/title/Title";
import { portfolioContext } from "../../context/portfolio";
import { getProyects } from "../../firebase/projects";
import { Project } from "../../interfaces/projects";
import ProjectView from "./Project";

const Projects = () => {
    const [projectSelected, setProjectSelected] = useState<Project>();
    const { projects, setProjectsToContext } = useContext(portfolioContext);

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
                        Proyectos
                    </Title>
                    {projects.map((project) => (
                        <Card key={ project.id }>
                            <section className='projects__project'>
                                <span className='projects__title'>{ project.projectName }</span>
                                <img src={project.images.desktop[0]} alt={project.projectName} />
                                <span className="projects__cta">
                                    <CTALink
                                        label={'Ver proyecto'}
                                        action={() => setProjectSelected(project)}
                                        secondary
                                    />
                                </span>
                            </section>
                        </Card>
                    ))}
                    { projects.length > 9 &&
                        <CTALink
                            label={'Mas Proyectos'}
                            action={() => console.log('click en el call to action')}
                            secondary
                        />
                    }
                </>
            </main>
    )
}

export default Projects;