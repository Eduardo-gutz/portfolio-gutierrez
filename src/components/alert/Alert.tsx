import { useEffect, useState } from "react"
import Card from "../card/Card"
import CTALink from "../cta-link/CTALink"

interface AlertProps {
    open: boolean
    text: string
    action: () => void
    onClose: () => void
    textButton: string
    title?: string
    type?: 'succes' | 'error' | 'info'
}

const Alert = ({ open, text, action, onClose, textButton, title, type }: AlertProps) => {
    const [ openModal, setOpen ] = useState<boolean>(false);
    const getColorType = () => {
        switch(type) {
            case 'succes':
                return '#2d614a'
            case 'error':
                return '#792d2d'
            case 'info':
                return '#2d4679'
            default:
                return '#2F2D61'
        }
    }

    useEffect(() => {
        setOpen(open)
    }, [open]);

    return (
        <div className={`modal ${!openModal ? '' : 'active'}`}>
            <Card>
                <div className="modal__inner" style={{ backgroundColor: getColorType() }}>
                    <p className="modal__title">{ title }</p>
                    <p className="modal__text">{ text }</p>
                    <CTALink
                        label={ textButton }
                        action={ action }
                        secondary
                    />
                </div>
            </Card>
        </div>
    )
}

export default Alert;