import './styles/App.scss';
import { Route, Routes } from 'react-router-dom';
import { routes } from './modules/routes';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {routes.map((route) =>
          <Route key={route.name} path={route.route} element={<route.component />} />
        )}
      </Routes>
    </div>
  );
}

export default App;

