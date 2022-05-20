import { ReactElement } from "react";

interface ParagraphProps {
    children: ReactElement | string
}

const Paragraph = ({ children }: ParagraphProps) => {
    return (
        <p className="paragraph">
            { children }
        </p>
    )
}

export default Paragraph;