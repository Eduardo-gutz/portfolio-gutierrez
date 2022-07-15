// import profileImage from '../../assets/images/photoabout.png';
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
import texts from '../../assets/texts.json';
import Subtitle from '../../components/subtitle/Subtitle';

const About = () => {
    const navigate = useNavigate();
    const { skills, setSkillsToContext } = useContext(portfolioContext);
    const t = texts.about

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
            {/*<img src={ profileImage } alt="eduardo gutierrez" />*/}
            <Card>
                <div className="presentation__text">
                    <Title>
                        { t.title }
                    </Title>
                    <Paragraph>
                        { t.text }
                    </Paragraph>
                    <Subtitle text={ t.subtitle2 } />
                    <Paragraph>
                        { t.summary }
                    </Paragraph>
                    <Subtitle text={ t.subtitle3 } />
                    <Paragraph>
                        { t.goal }
                    </Paragraph>
                    <CTALink
                        label={ t.buttons.contact }
                        icon={'right-arrow-alt'}
                        action={() => navigate('/contact')}
                        secondary
                    />
                </div>
            </Card>
        </main>
        <Divider />
        <section className='skills'>
            <div className="skills__title-section">
                <Title secondary>
                    { t.skills.title }
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
                    label={ t.buttons.CV }
                    action={ downloadCV }
                    secondary
                />
            </div>
        </section>
        </>
    )
}

export default About;