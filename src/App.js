import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Stokes from './pages/Stokes';
import Categories from './pages/Categories';

function App() {
  return (
      <Routes>
        <Route index element={<Categories />} />
        <Route path="categories" element={<Categories />} />
        <Route path="stokes" element={<Stokes />} />
      </Routes>
  );
}

export default App;

