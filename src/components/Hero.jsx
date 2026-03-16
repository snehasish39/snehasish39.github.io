import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import './Hero.css';

function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="gradient-text">{personal.name}</h1>
            <p className="subtitle">{personal.title}</p>
            <p className="tagline">{personal.tagline}</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects ⚡
              </button>
              <a href={personal.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                GitHub Profile
              </a>
            </div>
          </motion.div>
          
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="floating-card glass">
              <div className="code-snippet">
                <span className="comment">// Building the future</span><br/>
                <span className="keyword">const</span> impact = {'{'}<br/>
                <span className="property">  security:</span> <span className="value">"40% ↓"</span>,<br/>
                <span className="property">  efficiency:</span> <span className="value">"2K+ hrs"</span>,<br/>
                <span className="property">  speed:</span> <span className="value">"30% ↑"</span><br/>
                {'}'};
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
