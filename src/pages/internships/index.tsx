import { Link } from 'react-router-dom';
import Button from '../../components/ui/button';
import Card from '../../components/ui/card';
import './internships.css';

const Internships = () => {
  const roles = [
    {
      title: "Game Design Intern",
      duration: "3 Months",
      mode: "Remote",
      desc: "Assist in designing core mechanics, systems, and gameplay loops. Work closely with senior designers to document and prototype features."
    },
    {
      title: "UI/UX for Games Intern",
      duration: "3 Months",
      mode: "Hybrid",
      desc: "Design user interfaces for games, creating wireframes, mockups, and assets. Focus on usability and aesthetic consistency."
    },
    {
      title: "QA / Game Tester Intern",
      duration: "1-2 Months",
      mode: "Remote",
      desc: "Playtest builds, report bugs, and provide feedback on gameplay balance and feel. Learn the professional QA workflow."
    }
  ];

  return (
    <div className="page-container container internships-page">
      <div className="page-header">
        <h1 className="page-title">Internship Program</h1>
        <p className="page-subtitle">
          Join us to learn, grow, and build. Our internship program is designed to give you real-world experience in a professional indie studio environment.
        </p>
      </div>

      <div className="internships-grid">
        {roles.map((role, index) => (
          <Card key={index} className="internship-card">
            <h3 className="role-title">{role.title}</h3>
            <div className="role-meta">
              <span>🕒 {role.duration}</span>
              <span>📍 {role.mode}</span>
            </div>
            <p className="role-desc">{role.desc}</p>
            <div className="role-tags">
              <span className="tag prototype">Certification Provided</span>
            </div>
            <Link to="/contact" style={{ marginTop: '20px', display: 'block' }}>
               <Button variant="primary" size="full">Apply Now</Button>
            </Link>
          </Card>
        ))}
      </div>

      <div className="apply-cta">
        <h2>Ready to Start Your Career?</h2>
        <p>
          We look for passion, discipline, and a willingness to learn. If you're ready to take the first step in your game development career, apply now.
        </p>
        <Link to="/contact">
          <Button variant="outline" size="md">Contact Us</Button>
        </Link>
      </div>
    </div>
  );
};

export default Internships;
