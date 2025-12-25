import Card from '../../components/ui/card';
import './about.css';

const About = () => {
  const skills = [
    { title: "Game Design", desc: "Crafting engaging mechanics, systems, and player loops that keep players coming back." },
    { title: "Level Design", desc: "Building immersive worlds and challenging environments that tell a story without words." },
    { title: "UI/UX for Games", desc: "Designing intuitive, stylish, and responsive interfaces that enhance the gameplay experience." },
    { title: "Narrative Design", desc: "Weaving compelling stories, deep lore, and memorable characters into the fabric of the game." },
    { title: "Prototyping", desc: "Rapid iteration to find the fun quickly. We fail fast to succeed sooner." },
    { title: "Playtesting & QA", desc: "Rigorous testing to ensure quality, polish, and a bug-free experience for players." }
  ];

  return (
    <div className="page-container container">
      <div className="page-header">
        <h1 className="page-title">Who We Are</h1>
        <p className="page-subtitle">
          We are Asurax Studio. A collective of passionate developers and designers dedicated to pushing the boundaries of indie games.
        </p>
      </div>

      <div className="about-section section-spacer">
        <div className="grid-2">
          <div className="about-text">
            <h2>Our Vision</h2>
            <p>
              To create games that leave a lasting impact, while fostering the next generation of game development talent. 
              We believe in the power of interactive storytelling and the importance of polished, responsive gameplay. 
              We don't just build games; we build experiences that resonate with players long after they put down the controller.
            </p>
          </div>
          <div className="about-text">
            <h2>Our Culture</h2>
            <p>
              Our culture is built on learning, mentorship, and the disciplined pursuit of excellence. 
              We operate with a flat hierarchy where the best idea wins, regardless of who it comes from.
              We value transparency, honest feedback, and the continuous improvement of our craft.
            </p>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2>Core Expertise</h2>
        <div className="grid-3">
          {skills.map((skill, index) => (
            <Card key={index} className="skill-card">
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
