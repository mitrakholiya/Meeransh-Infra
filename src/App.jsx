import { useState } from 'react';
import Homepage from './Pages/HomePage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ServicePage from './Pages/ServicePage/ServicePage';
import ContactPage from './Pages/ContactPage/ContactPage';
import Blog from './Pages/Blog/Blog';
import Build from './Pages/build/Build';


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/blog' element={<Blog/>}/>
        <Route path="/build" element={<Build/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
