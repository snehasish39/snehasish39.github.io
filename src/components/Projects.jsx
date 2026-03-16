import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import './Projects.css';

function Projects() {
  const featuredProjects = portfolioData.projects.filter(p => p.featured);
  
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title gradient-text">Featured Projects</h2>
        <p className="section-subtitle">Enterprise solutions delivering measurable business impact</p>
        
        <div className="projects-grid">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header" style={{ background: project.gradient }}>
                <div className="project-icon">{project.icon}</div>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>
              <div className="project-body">
                <p className="project-description">{project.description}</p>
                <div className="impact-box">
                  <h4>📊 Business Impact</h4>
                  <ul>
                    {project.impact.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="tech-tags">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
