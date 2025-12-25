import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo-link">
          <img 
            src="/src/assets/logo/asurax-logo.png" 
            alt="Asurax Studio" 
            className="navbar-logo-img"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const span = document.createElement('span');
              span.className = 'logo-text-fallback';
              span.innerHTML = 'ASURAX<span class="logo-dot">.</span>';
              e.currentTarget.parentElement?.appendChild(span);
            }}
          />
        </Link>
        
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
        </button>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {['/', '/about', '/projects', '/internships', '/contact'].map((path) => (
            <Link 
              key={path}
              to={path} 
              className={`nav-link ${isActive(path)}`} 
              onClick={() => setIsOpen(false)}
            >
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
