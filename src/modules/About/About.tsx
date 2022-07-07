import profileImage from '../../assets/images/imagenperfilejemplo.png';
import Card from '../../components/card/Card';
import Title from '../../components/title/Title';
import Paragraph from '../../components/paragraph/Paragraph';
import SkillCard from './components/SkillCard';
import Divider from '../../components/divider/Divider';
import CTALink from '../../components/cta-link/CTALink';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { downloadCurriculum, getSkills } from '../../firebase/skills';
import { portfolioContext } from '../../context/portfolio';

const About = () => {
    const navigate = useNavigate();
    const { skills, setSkillsToContext } = useContext(portfolioContext);

    const downloadCV = async () => {
        const url = await downloadCurriculum();
        const anchor = document.createElement('a');
        anchor.setAttribute('hidden', 'true');
        anchor.setAttribute('download', 'Eduardo_Gutierrez.pdf');
        anchor.setAttribute('target', '_blank');
        anchor.setAttribute('href', url);
        
        anchor.click()
        
    }

    useEffect(() => {
        const getAllSkills = async () => {
            const skills = await getSkills()
            setSkillsToContext(skills)
        }

        if(!skills.length) {
            getAllSkills()
        }
    }, [setSkillsToContext, skills.length]);
    return (
        <>
        <main className="presentation">
            <img src={profileImage} alt="eduardo gutierrez" />
            <Card>
                <div className="presentation__text">
                    <Title>
                        Acerca de mi
                    </Title>
                    <Paragraph>
                        Soy una programador autodidacta, tome interés por la programación ya hace 3 años, pero comencé con el lenguaje de Python; fue hasta hace un año y medio que entre de lleno al front end y que es a lo que me quiero dedicar, he realizado algunas practicas con las cuales he ganado experiencia tanto en el maquetado de html y css, así como en la programación con Javascript, VueJs y React con el cual tengo mayor experiencia.
                    </Paragraph>
                    <Paragraph>
                        Soy una programador autodidacta, tome interés por la programación ya hace 3 años, pero comencé con el lenguaje de Python;
                    </Paragraph>
                </div>
            </Card>
        </main>
        <Divider cta={
            <CTALink
                label={'Contactame'}
                icon={'right-arrow-alt'}
                action={() => navigate('/contact')}
            />
        }/>
        <section className='skills'>
            <div className="skills__title-section">
                <Title secondary>
                    Mis Habilidades
                </Title>
            </div>
            { skills.map((skill) =>
                <SkillCard
                    key={skill.name}
                    img={ skill.image }
                    title={ skill.name }
                />
            ) }
            <div className="skills__cta">
                <CTALink
                    label={'Descargar Curriculum'}
                    action={ downloadCV }
                    secondary
                />
            </div>
        </section>
        </>
    )
}

export default About;