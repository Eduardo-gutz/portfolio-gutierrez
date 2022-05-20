import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom";
import Burger from "./Burger"

const Navbar = () => {
    const navigate = useNavigate()
    const [ isMenuActive, setIsMenuActive ] = useState<boolean>(false);
    const [ showMenu, setShowMenu ] = useState<boolean>(false);
    const linksRef = useRef<HTMLUListElement>(null)
    const menuItems =  [
        { name: 'Inicio', link: '/' },
        { name: 'Acerca de mi', link: '/about' },
        { name: 'Proyectos', link: '' },
        { name: 'Contacto', link: '' }
    ]

    const hidenMenu = (isActive: boolean) => {
        setIsMenuActive(isActive)
        setTimeout(() => {
            setShowMenu(isActive)
        }, 500);
    }

    const activeTab = (target: any, index: number, link: string) => {
        if(linksRef.current) {
            let heigthParent = linksRef.current.getBoundingClientRect().height;
            let heigthItem = target.getBoundingClientRect().height;
            let move = ((heigthParent - 20) / 3 * (index)) + heigthItem
    
            if(window.innerWidth > 959) {
                heigthParent = linksRef.current?.getBoundingClientRect().left;
                heigthItem = target.getBoundingClientRect().left;
                move = heigthItem - heigthParent
            }
    
            linksRef.current.style.setProperty('--translate-to-active', `${move}px`);
    
            navigate(link)
        }
    }
    return (
        <nav className="navbar">
            <Burger onActive={(isActive) => hidenMenu(isActive)}/>
            <div className={isMenuActive ? "menu active" : 'menu'} style={isMenuActive ? {} : {display: showMenu ? '' : 'none'}} >
                <ul className="menu__links" ref={linksRef}>
                    {menuItems.map((item, index) =>
                        <li key={ index } onClick={(e) => activeTab(e.target, index, item.link)}>
                            { item.name }
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar