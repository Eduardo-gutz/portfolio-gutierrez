import Home from "./Home/Home"
import About from "./About/About"

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
    }
]