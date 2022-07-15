import Title from "../title/Title"

interface SubtitleProps {
    text: string
}
const Subtitle = ({ text }: SubtitleProps) => {
    return (
        <span className="details__subtitle">
            <Title>
                { text }
            </Title>
        </span>
    )
}

export default Subtitle;