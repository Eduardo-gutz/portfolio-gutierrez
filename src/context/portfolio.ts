import { createContext } from "react";
import { Project } from "../interfaces/projects";
import { Skill } from "../interfaces/skills";

interface PortfolioContext {
    projects: Project[],
    skills: Skill[],
    setProjectsToContext: (projects: Project[]) => void,
    setSkillsToContext: (skills: Skill[]) => void
}

export const portfolioContext = createContext<PortfolioContext>({
    projects: [],
    skills: [],
    setProjectsToContext: (projects: Project[]) => null,
    setSkillsToContext: (skills: Skill[]) => null
})

const PortfolioProvider = portfolioContext.Provider
export default PortfolioProvider;