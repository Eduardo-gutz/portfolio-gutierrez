interface BurgerProps {
    onActive: (isActive: boolean) => void
    isActive: boolean
}

const Burger = ({ onActive, isActive }: BurgerProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            onClick={() => onActive(!isActive)}
            style={{zIndex: '9'}}
            id='burger'
        >
            <g className={isActive ? 'burger-active' : ''} fill="#D0D6F9" fill-rule="evenodd">
                <path className="burger__top" d="M0 0h24v3H0zM0" />
                <path className="burger__middle" d="M0 9h24v3H0zM0" />
                <path className="burger__bottom" d="M0 18h24v3H0z" />
            </g>
        </svg>
    )
}

export default Burger