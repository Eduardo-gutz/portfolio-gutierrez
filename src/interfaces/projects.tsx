export interface Project {
    descrption: string
    id: string
    images: {
        desktop: string[]
        tablet: string[]
        mobile: string[]
    }
    link: string
    projectName: string
    repo: string
    roles: {
        description: string
        role: string
    }[]
    tecnologies: {
        description: string
        link: string
        name: string
        type: string
    }[]
};