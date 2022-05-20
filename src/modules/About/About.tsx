import profileImage from '../../assets/images/imagenperfilejemplo.png';
import Card from '../../components/card/Card';
import Title from '../../components/title/Title';
import Paragraph from '../../components/paragraph/Paragraph';
import logosvg from '../../assets/svg/react-2.svg';
import SkillCard from './components/SkillCard';
import Divider from '../../components/divider/Divider';
import CTALink from '../../components/cta-link/CTALink';

const About = () => {
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
                        Soy una programador autodidacta, tome interés por la programación ya hace 3 años, pero comencé con el lenguaje de Python; fue hasta hace un año y medio que entre de lleno al front end y que es a lo que me quiero dedicar, he realizado algunas practicas con las cuales he ganado experiencia tanto en el maquetado de html y css, así como en la programación con Javascript, VueJs y React con el cual tengo mayor experiencia.
                    </Paragraph>
                </div>
            </Card>
            <CTALink />
        </main>
        <Divider />
        <section className='skills'>
            <Title secondary>
                Mis Habilidades
            </Title>
            <SkillCard
                img={ logosvg }
                title='React.js'
                description='Una biblioteca de JavaScript para construir interfaces de usuario'
            />
            <SkillCard
                img={ logosvg }
                title='React.js'
                description='Una biblioteca de JavaScript para construir interfaces de usuario'
            />
            <SkillCard
                img={ logosvg }
                title='React.js'
                description='Una biblioteca de JavaScript para construir interfaces de usuario'
            />
            <SkillCard
                img={ logosvg }
                title='React.js'
                description='Una biblioteca de JavaScript para construir interfaces de usuario'
            />
            <SkillCard
                img={ logosvg }
                title='React.js'
                description='Una biblioteca de JavaScript para construir interfaces de usuario'
            />
        </section>
        </>
    )
}

export default About;