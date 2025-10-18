import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">Mohana Bhavani</h2>
          <button
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
          >
            ☰
          </button>
          <ul id="primary-navigation" className={`nav-links ${isOpen ? "show" : ""}`}>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="hero-images">
            <img
              src="/profile.jpg"
              alt="Mohana Bhavani"
              className="profile-jpg"
            />
          </div>
          <div className="hero-text">
            <h2 className="intro-text">Hi, I'm</h2>
            <h1 className="name-text">Mohana Bhavani</h1>
            <p className="student-text">Student at University of South Florida</p>
            <div className="contact-bar">
              <a href="mailto:mohanabhavani354@gmail.com" className="contact-item">
                <FaEnvelope className="contact-icon" />
              </a>
              <a href="https://www.linkedin.com/in/mohana-bhavani" className="contact-item">
                <FaLinkedin className="contact-icon" />
              </a>
              <a href="https://github.com/yourprofile" className="contact-item">
                <FaGithub className="contact-icon" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" data-aos="fade-up">
        <h2>About Me</h2>
        <p>
          I am a dedicated data intelligence professional with a strong background in software development, AI, and machine learning. I am currently pursuing my Master of Science in Data Intelligence at the University of South Florida, where I am enhancing my expertise in algorithms, data analysis, and system architecture.
        </p>
        <div className="about-container">
          <div className="about-box">
            <h3><FaGraduationCap className="box-icon" /> Education</h3>
            <p>MS in Data Intelligence @ University of South Florida</p>
            <p>BTech in Information Technology @ GVPCE</p>
          </div>
          <div className="about-box">
            <h3><FaBriefcase className="box-icon" /> Experience</h3>
            <p>AI Trainee / Tester – IASSIST Innovation Labs (Jan 2023 – Dec 2023)</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" data-aos="fade-up">
        <h2>Experience</h2>
        <div className="experience-container">
          <div className="experience-card">
            <h3>AI Trainee / Tester – IASSIST Innovation Labs</h3>
            <p>Jan 2023 – Dec 2023</p>
            <p>
              Developed AI-driven automation and data solutions to optimize healthcare claim processing for an insurance client. Analyzed hospital billing data to detect overcharges, built machine learning models to classify and reconcile claims, and curated high-quality datasets.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" data-aos="fade-up">
        <h2>Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <h3>Collaborative Code Editor with Compiler</h3>
            <p>
              Built a collaborative platform with code editor, chat, and video call features. Integrated Google authentication and MongoDB database for real-time collaboration.
            </p>
          </div>
          <div className="project-card">
            <h3>Covid Analysis Dashboard Using Python</h3>
            <p>
              Designed an interactive dashboard using Python (pandas, numpy, streamlit) and MySQL to analyze COVID-19 data across countries with visualizations and tables.
            </p>
          </div>
          <div className="project-card">
            <h3>Bank Loan Risk Assessment</h3>
            <p>
              Developed a machine learning system to predict borrower risk for bank loans using a dataset of over 150,000 applications with 190+ features. Employed Random Forest, Logistic Regression, SVM, XGBoost, CatBoost, and LightGBM. Applied SMOTE, stratified cross-validation, and feature engineering to improve model performance.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" data-aos="fade-up">
  <h2>Let’s Connect</h2>
  <div className="contact-container">
    <a href="mailto:mohanabhavani354@gmail.com" className="contact-item">
      <FaEnvelope className="contact-icon" />
    </a>
    <a href="https://linkedin.com/in/mohana-bhavani" target="_blank" rel="noopener noreferrer" className="contact-item">
      <FaLinkedin className="contact-icon" />
    </a>
    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-item">
      <FaGithub className="contact-icon" />
    </a>
  </div>
</section>



      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <p>© {new Date().getFullYear()} Mohana Bhavani | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;
