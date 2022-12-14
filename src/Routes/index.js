import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import LoginLayout from '../Layouts/LoginLayout';
import Home from '../Views/Home';
import Local from '../Views/Local';
import Refrigerador from '../Views/Refrigerador';
import SignIn from '../Views/SignIn';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/local' element={<Local />}>
            <Route path=':id' element={<Local />} />
          </Route>
          <Route path='/refrigerador' element={<Refrigerador />}>
            <Route path=':id' element={<Refrigerador />} />
          </Route>
        </Route>
        <Route path='/login' element={<LoginLayout />}>
          <Route index element={<SignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
