import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Curriculum from '../pages/Curriculum';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={ <Login /> } />
      <Route path='/curriculum' element={ <Curriculum /> } />
    </Routes>
  );
}

export default AppRoutes;