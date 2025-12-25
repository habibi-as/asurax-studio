import Button from '../../components/ui/button';
import Card from '../../components/ui/card';
import './projects.css';

const Projects = () => {
  const projects = [
    {
      id: 'ashore',
      title: 'ASHORE (The Last Signal)',
      genre: 'Narrative Adventure',
      themeColor: 'teal',
      desc: 'A cinematic narrative-driven experience set in a fractured world of signals, memory, and silence. Focused on atmosphere, story, and emotional exploration.',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      instagram: 'https://www.instagram.com/asurax_studios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    {
      id: 'red01',
      title: 'RED01',
      genre: 'Tactical Shooter',
      themeColor: 'red',
      desc: 'A fast-paced futuristic multiplayer concept built around high-intensity combat, neon cyberpunk environments, and squad-based tactics.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      instagram: 'https://www.instagram.com/asurax_studios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    {
      id: 'oath-hunt',
      title: 'THE OATH HUNT',
      genre: 'Dark Fantasy RPG',
      themeColor: 'goldenrod',
      desc: 'A dark fantasy action RPG centered on ancient oaths, cursed lands, and brutal combat. Heavy lore, mythical creatures, and dramatic environments.',
      image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      instagram: 'https://www.instagram.com/asurax_studios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    {
      id: 'fear-around',
      title: 'FEAR AROUND',
      genre: 'Psychological Horror',
      themeColor: 'crimson',
      desc: 'A psychological horror experience designed to disturb and unsettle. Focus on sound design, environmental storytelling, and fear-driven gameplay.',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
      instagram: 'https://www.instagram.com/asurax_studios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    }
  ];

  return (
    <div className="page-container container projects-page">
      <div className="page-header">
        <h1 className="page-title">Our Games</h1>
        <p className="page-subtitle">
          Crafting immersive worlds and unforgettable experiences.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <Card 
            key={project.id} 
            className={`project-card project-${project.id}`}
            style={{
              '--project-color': project.themeColor,
              '--project-hover-glow': `0 0 15px ${project.themeColor}80`,
            } as React.CSSProperties}
          >
            <div 
              className="project-image"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="image-overlay" />
            </div>
            <div className="project-content">
              <div className="project-tags">
                <span className="tag genre">{project.genre}</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <div className="project-actions">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="project-btn"
                  aria-label={`View details about ${project.title}`}
                >
                  View Details
                </Button>
                <a 
                  href={project.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram-link"
                  aria-label={`Follow ${project.title} on Instagram`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.77-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
