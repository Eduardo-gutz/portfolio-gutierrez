import Home from "./Home/Home"
import About from "./About/About"
import Projects from "./Projects/Projects"

export const routes = [
    {
        name: 'home',
        route: '/',
        component: Home
    },
    {
        name: 'About',
        route: '/about',
        component: About
    },
    {
        name: 'Projects',
        route: '/projects',
        component: Projects
    }
]