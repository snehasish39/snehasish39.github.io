import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title gradient-text">Skills & Expertise</h2>
        <p className="section-subtitle">Technical mastery meets strategic business acumen</p>
        
        <div className="skills-grid">
          {Object.entries(portfolioData.skills).map(([category, data], index) => (
            <motion.div
              key={category}
              className="skill-card glass"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3>
                <span className="skill-icon">{data.icon}</span>
                {category}
              </h3>
              <div className="skill-items">
                {data.items.map((skill, i) => (
                  <span key={i} className="skill-pill">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
