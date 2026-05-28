import React, { useState, useEffect } from 'react';
import './App.css';

// Header Component
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault(); // Prevents page reload
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <h1 className="logo">AS</h1>
        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          {/* Added hrefs to all links to satisfy ESLint/Netlify requirements */}
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
          <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a>
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

// Hero Component
const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="animated-bg">
        <div 
          className="gradient-orb orb-1" 
          style={{
            transform: `translate(${mousePosition.x / 20}px, ${mousePosition.y / 20}px)`
          }}
        ></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="greeting">Hello, I'm</p>
            <h1 className="hero-name">
              Semal <span className="gradient-text">Amarajeewa</span>
            </h1>
            <h2 className="hero-title">Full Stack Developer</h2>
            <p className="hero-description">
              Passionate IT undergraduate specializing in building exceptional digital experiences.
              Currently focused on creating innovative web and mobile applications.
            </p>
            <div className="hero-buttons">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} 
                className="btn-primary"
              >
                View Projects
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                className="btn-secondary"
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="profile-container">
              <div className="profile-glow"></div>
              <img 
                src="/images/realmy.png" 
                alt="Arindu Semal Amarajeewa" 
                className="profile-photo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="profile-placeholder">AS</div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};

// About Component
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">About Me</span>
        </h2>
        
        <div className="about-content">
          <div className="about-image-wrapper">
            <div className="about-glow"></div>
            <div className="about-image">
              <img 
                src="/images/profile.png" 
                alt="About Arindu" 
                className="about-photo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="about-placeholder">
                <span>📸</span>
                <p>Add your photo here</p>
              </div>
            </div>
          </div>

          <div className="about-text-content">
            <div className="about-text">
              <p>
                I'm a dedicated Information Technology undergraduate at Sri Lanka Institute of Information Technology (SLIIT),
                pursuing my BSc. in Information Technology (Honors). With a strong foundation in full-stack development,
                I specialize in building scalable web and mobile applications.
              </p>
              <p>
                My journey in tech is driven by passion for problem-solving and creating innovative solutions. I have hands-on
                experience with the MERN stack, Kotlin for Android development, and PHP-based web applications.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <h3 className="gradient-text">10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3 className="gradient-text">15+</h3>
                <p>Technologies</p>
              </div>
              <div className="stat-item">
                <h3 className="gradient-text">2+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Component
const Skills = () => {
  const skills = {
    'Programming Languages': ['Java', 'C', 'C++', 'PHP', 'JavaScript', 'TypeScript', 'Kotlin'],
    'Frontend Development': ['HTML5', 'CSS3', 'React.js', 'Next.js', 'Tailwind CSS', 'WordPress'],
    'Backend Development': ['T3 Stack', 'Node.js', 'Express.js', 'tRPC', 'Prisma', 'Java Servlets', 'JSP', 'Apache Tomcat'],
    'Database': ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
    'Tools & Technologies': ['Git', 'GitHub', 'Postman', 'VS Code', 'Eclipse', 'Android Studio']
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">Skills & Technologies</span>
        </h2>
        
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-category">
              <div className="skill-card-glow"></div>
              <h3 className="skill-category-title">{category}</h3>
              <div className="skill-items">
                {items.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Component
const Projects = () => {
  const projects = [
    {
      title: 'UniConnect',
      description: 'A T3 Stack student networking platform for learning, resource sharing, collaboration, campus services, A/L result checking, events, buy & sell, renting, and lost & found workflows.',
      tech: ['T3 Stack', 'Next.js', 'TypeScript', 'PostgreSQL'],
      period: '2026',
      image: '/images/uniconnect.svg',
      github: 'https://github.com/arindu123/uniconnect.git',
      demo: 'https://www.uniconnect.website'
    },
    {
      title: 'Auto Hub',
      description: 'A comprehensive vehicle advertisement website built with PHP and MySQL, enabling users to browse, post, and manage vehicle listings efficiently with advanced search and filtering capabilities.',
      tech: ['HTML', 'CSS', 'PHP', 'MySQL'],
      period: 'Jul 2024 - Nov 2024',
      image: '/images/home.png',
      github: 'https://github.com/arindu123/Autohub.git',
      demo: 'https://autohub-demo.com'
    },
    {
      title: 'Event Planning System',
      description: 'Full-stack event management platform developed using MERN stack, providing seamless event creation, booking, and management capabilities with real-time updates.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      period: 'Feb 2025 - Nov 2025',
      image: '/images/event.jpeg',
      github: 'https://github.com/arindu123/Online-Event-Planning-System.git',
      demo: 'https://event-demo.com'
    },
    {
      title: 'Feast of Kings',
      description: 'Food delivery mobile application with an intuitive Android frontend built in Kotlin, offering smooth user experience, efficient order management, and real-time order tracking.',
      tech: ['Kotlin', 'Android Studio', 'Firebase'],
      period: 'Jul 2025 - Oct 2025',
      image: '/images/splash.png',
      github: 'https://github.com/arindu123/FeastOfkings.git'
    },
    {
      title: 'HabitWave',
      description: 'Habit tracking mobile app featuring complete CRUD operations and an engaging frontend interface developed in Kotlin for Android platform with progress analytics.',
      tech: ['Kotlin', 'Android Studio', 'SQLite'],
      period: 'Jul 2025 - Oct 2025',
      image: '/images/habit.jpeg',
      github: 'https://github.com/arindu123/HabitVave.git'
    },
    {
      title: 'Smart Horana Urban Council System',
      description: 'A municipal management system with citizen service requests, permit & license handling, online payments, HR & salary management, and admin dashboards. I have completed the finance & Payment Module',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      period: 'Jul 2025 - Oct 2025',
      image: '/images/horana.jpeg',
      github: 'https://github.com/arindu123/Horana-urban-council-project-1-.git'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card-glow"></div>
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="project-placeholder">
                  <span>📸</span>
                  <p>{project.title}</p>
                </div>
                <div className="project-overlay"></div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-period">{project.period}</p>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link demo"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">
          <span className="gradient-text">Get In Touch</span>
        </h2>
        
        <p className="contact-intro">
          I'm currently looking for new opportunities and collaborations. Whether you have a question
          or just want to say hi, feel free to reach out!
        </p>

        <div className="cv-download">
          <a 
            href="/Resume_Semal_Amarajeewa.pdf" 
            download="Resume_Semal_Amarajeewa.pdf"
            className="btn-download"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>
        
        <div className="contact-grid">
          <a href="mailto:amarajeewa355@gmail.com" className="contact-card">
            <div className="contact-card-glow"></div>
            <div className="contact-icon">📧</div>
            <h3>Email</h3>
            <p>amarajeewa355@gmail.com</p>
          </a>
          
          <a href="tel:+94774254139" className="contact-card">
            <div className="contact-card-glow"></div>
            <div className="contact-icon">📱</div>
            <h3>Phone</h3>
            <p>+94 77 425 4139</p>
          </a>
          
          <a href="https://github.com/arindu123" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-card-glow"></div>
            <div className="contact-icon">💻</div>
            <h3>GitHub</h3>
            <p>View my work</p>
          </a>
          
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-card-glow"></div>
            <div className="contact-icon">💼</div>
            <h3>LinkedIn</h3>
            <p>Connect with me</p>
          </a>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Arindu Semal Amarajeewa. All rights reserved.</p>
          <p>Built with React ❤️</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
