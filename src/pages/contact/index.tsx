import Button from '../../components/ui/button';
import Card from '../../components/ui/card';
import './contact.css';

// Reuse Icons for consistency
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

const Contact = () => {
  return (
    <div className="page-container container">
      <div className="page-header">
        <h1 className="page-title">Get in Touch</h1>
        <p className="page-subtitle">
          Whether you're looking for an internship, want to collaborate, or just want to say hi.
        </p>
      </div>

      <div className="contact-content grid-2">
        <Card className="contact-info-card">
          <div className="info-item">
            <h3>Contact Info</h3>
            <div className="contact-methods">
                <a href="mailto:asurax1983@gmail.com" className="contact-method-link">
                    <div className="icon-box"><Icons.Mail /></div>
                    <span>asurax1983@gmail.com</span>
                </a>
                <a href="https://wa.me/918433365787" target="_blank" rel="noopener noreferrer" className="contact-method-link">
                    <div className="icon-box"><Icons.WhatsApp /></div>
                    <span>+91 8433365787</span>
                </a>
            </div>
          </div>
          
          <div className="info-item">
            <h3>Location</h3>
            <p>Dehradun, India</p>
          </div>
          
          <div className="social-connect">
            <h3>Follow Us</h3>
            <div className="social-links-row">
               <a href="" className="social-btn instagram" aria-label="Instagram">
                 <Icons.Instagram />
               </a>
            </div>
          </div>
        </Card>

        <Card className="contact-form-card">
            <h3>Send us a Message</h3>
            <form className="contact-form" onSubmit={(e: React.FormEvent) => e.preventDefault()}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Your Email" />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea placeholder="Tell us about your project or inquiry..." rows={5}></textarea>
                </div>
                <Button variant="primary" size="full">Send Message</Button>
            </form>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
