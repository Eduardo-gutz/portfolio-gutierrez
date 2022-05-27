interface CTALinkProps {
    label: string
    icon?: string
    action: () => void
    secondary?: boolean
}

const CTALink = ({ label, icon, action, secondary }: CTALinkProps) => {
    return (
        <button className={`cta ${secondary ? 'cta--secondary' : ''}`} onClick={ action }>
            <span className="cta__label">
                { label }
            </span>
            {icon && <i className={`bx bx-${ icon } bx-md`} />}
        </button>
    )
}

export default CTALink;