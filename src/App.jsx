import { useState } from 'react';
import Homepage from './Pages/HomePage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ServicePage from './Pages/ServicePage/ServicePage';
import ContactPage from './Pages/ContactPage/ContactPage';
import Blog from './Pages/Blog/Blog';
import Build from './Pages/build/Build';
import AuthPage from './Pages/Auth';
import { isAadmin } from './utils/auth';
import ProtectedRoute from './routes/ProtectedRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import ViewEstimate from './Pages/Dashboard/modules/ViewEstimate';
import AddBlog from './Pages/Dashboard/modules/AddBlog';
import ViewContect from './Pages/Dashboard/modules/ViewContect';

import { Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/build" element={<Build />} />
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<AuthPage />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path="/dashboard/add-blog" element={<AddBlog />} />
            <Route path="/dashboard/view-estimate" element={<ViewEstimate />} />
            <Route path="/dashboard/view-contect" element={<ViewContect />} />

          </Route>
        </Route>
      </Routes>
      <Toaster position="top-right" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;
