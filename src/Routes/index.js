import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Views/Home';
import Local from '../Views/Local';
import Refrigerador from '../Views/Refrigerador';
import Signin from '../Views/Signin';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/local' element={<Local />}>
            <Route path=':id' element={<Refrigerador />} />
          </Route>
          <Route path='signin' element={<Signin />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
