import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/HomePage/Homepage";
import ServicePage from "./Pages/ServicePage/ServicePage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Blog from "./Pages/Blog/Blog";
import Build from "./Pages/build/Build";
import AuthPage from "./Pages/Auth";
import Dashboard from "./Pages/Dashboard/Dashboard";

import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

import ViewEstimate from "./Pages/Dashboard/modules/ViewEstimate";
import AddBlog from "./Pages/Dashboard/modules/AddBlog";
import ViewContect from "./Pages/Dashboard/modules/ViewContect";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public pages */}
        <Route path="/" element={<Homepage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/build" element={<Build />} />

        {/* login */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<AuthPage />} />
        </Route>

        {/* dashboard */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<ViewEstimate />} />
            <Route path="add-blog" element={<AddBlog />} />
            <Route path="view-estimate" element={<ViewEstimate />} />
            <Route path="view-contect" element={<ViewContect />} />
          </Route>
        </Route>
      </Routes>

      <Toaster position="top-right" />
    </BrowserRouter>
  );
}

export default App;
