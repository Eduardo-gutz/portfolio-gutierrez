import { ReactElement } from "react";

interface CardProps {
    children: ReactElement
}
const Card = ({ children }: CardProps) => {
    return (
        <div className="card">
            { children }
        </div>
    )
}

export default Card;