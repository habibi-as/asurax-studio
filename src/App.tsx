import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLenis } from './hooks/uselenis';
import ScrollToTop from './components/layout/scroll-to-top';

// Layout
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';

// Pages
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Internships from './pages/internships';
import Contact from './pages/contact';
import NotFound from './pages/notfound';

function AppContent() {
  useLenis();

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
