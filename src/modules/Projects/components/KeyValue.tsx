interface KeyValueProps {
    label: string
    value: string
    link?: string
}

const KeyValue = ({ label, value, link }: KeyValueProps) => {
    return (
        <li className="tecnologie">
            <p className="tecnologie__row">
                { label }:
                {link ?
                    <a href={ link } target='_blank' rel="noreferrer">
                        { value }
                    </a>
                :
                <span>
                    { value }
                </span>
                }
            </p>
        </li>
    )
}

export default KeyValue;