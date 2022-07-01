import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card/Card";
import CTALink from "../../components/cta-link/CTALink";
import Title from "../../components/title/Title";
import { getProyects } from "../../firebase/projects";
import { Project } from "../../interfaces/projects";
import { setProjects } from "../../redux/projects.slice";
import { RootState } from "../../redux/store";
import ProjectView from "./Project";

const Projects = () => {
    const dispatch = useDispatch();
    const projects = useSelector((state: RootState) => state.projects);
    const [projectSelected, setProjectSelected] = useState<Project>();

    useEffect(() => {
        const getAllProjects = async () => {
            const projects = await getProyects();

            dispatch(setProjects(projects));
        }

        if(!projects.projects.length) {
            getAllProjects();
        }
    }, [dispatch, projects.projects.length]);
    
    return(
        projectSelected ?
            <ProjectView project={projectSelected} goback={() => setProjectSelected(undefined)} />
        :
            <main className="projects">
                <>
                    <Title>
                        Proyectos
                    </Title>
                    {projects.projects.map((project) => (
                        <Card>
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
                    <CTALink
                        label={'Mas Proyectos'}
                        action={() => console.log('click en el call to action')}
                        secondary
                    />
                </>
            </main>
    )
}

export default Projects;