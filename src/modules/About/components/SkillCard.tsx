import Card from "../../../components/card/Card"

interface SkillCardProps {
    img: string
    title: string
    description: string
}

const SkillCard = ({ img, title, description }: SkillCardProps) => {
    return (
        <Card>
            <section className='skills__skill'>
                <img src={ img } alt="react logo" />
                <p className='skills__title'>{ title }</p>
            </section>
        </Card>
    )
}

export default SkillCard;