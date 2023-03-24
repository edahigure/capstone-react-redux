import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Stokes from './pages/Stokes';
import Categories from './pages/Categories';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Categories />} />
        <Route path="categories" element={<Categories />} />
        <Route path="stokes" element={<Stokes />} />
      </Routes>
    </Router>
  );
}

export default App;

