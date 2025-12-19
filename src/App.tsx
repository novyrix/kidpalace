import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import GradeSchool from './pages/schools/GradeSchool';
import Kindergarten from './pages/schools/Kindergarten';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import SchoolLife from './pages/SchoolLife';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Contact from './pages/Contact';
import './index.css';

// Scroll to top on route change - use useLayoutEffect for immediate scroll before paint
function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Immediate scroll
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  // Also scroll on initial mount
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/schools/grade-school" element={<GradeSchool />} />
          <Route path="/schools/kindergarten" element={<Kindergarten />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/school-life" element={<SchoolLife />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
