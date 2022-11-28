import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Views/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
