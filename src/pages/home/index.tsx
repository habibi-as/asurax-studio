import { Link } from 'react-router-dom';
import Button from '../../components/ui/button';
import './home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-background">
        <div className="wireframe-cube"></div>
        <div className="grid-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <h1 className="hero-title">
          ASURAX <br /> STUDIO
        </h1>
        <p className="hero-subtitle">
          An indie game studio focused on game design, development, and talent incubation.
        </p>
        
        <div className="hero-actions">
          <Link to="/projects">
            <Button variant="primary" size="md">View Projects</Button>
          </Link>
          <Link to="/internships">
            <Button variant="outline" size="md">Internships</Button>
          </Link>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>SCROLL</span>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Home;
