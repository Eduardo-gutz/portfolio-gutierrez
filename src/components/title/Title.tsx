import { ReactElement } from "react";

interface TitleProps {
    children: ReactElement | string
    secondary?: boolean
    className?: string
}

const Title = ({ children, secondary, className }: TitleProps) => {
    return(
        <h1 className={`title ${secondary ? 'title--secondary' : ''} ${className?? ''}`}>
            { children }
        </h1>
    )
}

export default Title;