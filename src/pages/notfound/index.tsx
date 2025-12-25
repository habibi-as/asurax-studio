import { Link } from 'react-router-dom';
import Button from '../../components/ui/button';
import './notfound.css';

const NotFound = () => {
  return (
    <div className="notfound-page container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-text">The level you are looking for does not exist.</p>
      <Link to="/">
        <Button variant="primary" size="md">Return to Base</Button>
      </Link>
    </div>
  );
};

export default NotFound;
