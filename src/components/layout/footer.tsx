import { Link } from 'react-router-dom';
import '../../styles/footer.css';

// SVGs for icons to ensure no dependency issues
const Icons = {
  WhatsApp: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  ),
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  Instagram: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              {/* Logo Image Placeholder */}
              <div className="footer-logo-wrapper">
                 <img 
                   src="/src/assets/logo/asurax-logo.png" 
                   alt="Asurax Studio" 
                   className="footer-logo-img"
                   onError={(e) => {
                     // Fallback if image is missing
                     e.currentTarget.style.display = 'none';
                     e.currentTarget.parentElement!.innerHTML = '<h3>ASURAX<span>.</span></h3>';
                   }}
                 />
              </div>
            </Link>
            <p>Forging the next generation of interactive experiences. Built by gamers, for gamers.</p>
            
            <div className="footer-contact-items">
               <a href="https://wa.me/918433365787" target="_blank" rel="noopener noreferrer" className="contact-link">
                 <Icons.WhatsApp />
                 <span>+91 8433365787</span>
               </a>
               <a href="mailto:asurax1983@gmail.com" className="contact-link">
                 <Icons.Mail />
                 <span>asurax1983@gmail.com</span>
               </a>
            </div>

            <div className="social-links">
              <a href="" className="social-link" aria-label="Instagram">
                <Icons.Instagram />
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <div className="footer-col">
              <h4>Studio</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/projects">Games</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Join Us</h4>
              <ul>
                <li><Link to="/internships">Internships</Link></li>
                <li><Link to="/contact">Careers</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-col newsletter-col">
              <h4>Stay Updated</h4>
              <p>Subscribe to our newsletter for game updates.</p>
              <form className="newsletter-form" onSubmit={(e: React.FormEvent) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email" />
                <button type="submit">→</button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Asurax Studio. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
