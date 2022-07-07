import './styles/App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import { routes } from './modules/routes';
import Navbar from './components/navbar/Navbar';
import { useEffect, useState } from 'react';
import PortfolioProvider from './context/portfolio';
import { Skill } from './interfaces/skills';
import { Project } from './interfaces/projects';

function App() {
  const location = useLocation();
  const [ skills, setSkills ] = useState<Skill[]>([]);
  const [ projects, setProjects ] = useState<Project[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location]);
  return (
    <PortfolioProvider value={{
      setProjectsToContext: setProjects,
      setSkillsToContext: setSkills,
      projects,
      skills
    }}>
      <div className="App">
        <Navbar />
        <Routes>
          {routes.map((route) =>
            <Route key={route.name} path={route.route} element={<route.component />} />
          )}
        </Routes>
      </div>
    </PortfolioProvider>
  );
}

export default App;

