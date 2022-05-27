import { ReactElement } from "react";

interface DividerProps {
    cta?: ReactElement
}

const Divider = ({cta}: DividerProps) => {
    return (
        <div className="divider">
            {cta &&
                <span className="divider__cta">{ cta }</span>
            }
        </div>
    )
}

export default Divider;