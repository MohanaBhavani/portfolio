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
          <div className="hero-image">
            <img src="/profile.jpg" alt="Mohana Bhavani" className="profile-jpg" />
          </div>
          <div className="hero-text">
            <h2 className="intro-text">Hi, I'm</h2>
            <h1 className="name-text">Mohana Bhavani</h1>
            <p className="student-text">Student at University of South Florida</p>
            <a href="#contact" className="contact-info-btn">Contact Info</a>
            <div className="contact-bar">
              <a
                href="https://www.linkedin.com/in/mohanabhavani-tatikonda-6737b8329"
                className="contact-item"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin className="contact-icon" />
              </a>

              <a
                href="https://github.com/MohanaBhavani"
                className="contact-item"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
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
          I am a passionate Data Intelligence professional with a strong foundation in software engineering, machine learning, and full-stack web development. Currently pursuing my Master’s in Data Intelligence at the University of South Florida, I am expanding my expertise in data analytics, artificial intelligence, and scalable system design. My experience as an AI Trainee at IASSIST Innovation Labs allowed me to develop and optimize Python-based automation pipelines, build machine learning models, and contribute to real-world AI solutions across healthcare and insurance domains. Skilled in Java, Python, React, Node.js, and SQL/NoSQL databases, I thrive in dynamic environments that demand problem-solving, innovation, and cross-functional collaboration. My long-term goal is to apply intelligent systems to transform data into impactful business insights and technological advancements.
        </p>
        <div className="about-container">
          <div className="about-box">
            <h3><FaGraduationCap className="box-icon" /> Education</h3>
            <p>MS in Data Intelligence @ University of South Florida</p>
            <p>BTech in Information Technology @ GVPCE</p>
          </div>
          <div className="about-box">
            <h3><FaBriefcase className="box-icon" /> Experience</h3>
            <p>AI Trainee / Tester</p>
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
            <ul className="experience-list">
              <li>
                Developed <strong>AI-driven automation solutions</strong> to streamline and optimize
                <strong> healthcare claim processing</strong> for an insurance client.
              </li>
              <li>
                <strong>Analyzed large-scale hospital billing data</strong> to identify
                <strong> overcharges and anomalies</strong>, improving claim accuracy and efficiency.
              </li>
              <li>
                Designed and trained <strong>machine learning models</strong> to classify and reconcile
                medical claims with high precision.
              </li>
              <li>
                Curated and preprocessed <strong>high-quality datasets</strong>, ensuring model reliability
                and consistent performance across diverse data sources.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" data-aos="fade-up">
        <h2>Projects</h2>
        <div className="projects-container">
          {/* Image Segmentation */}
          <div className="project-card">
            <img
  className="project-image"
  src="/assets/image-segmentation.jpg"
  alt="Image segmentation U-Net results"
  loading="lazy"
/>
            <h3>Image Segmentation</h3>
            <ul>
              <li>Trained <strong>U-Net</strong> model for semantic segmentation of driving scenes.</li>
              <li>Used <strong>CameraRGB</strong> and <strong>CameraMask</strong> datasets with 1,080 images.</li>
              <li>Applied <strong>encoder–decoder architecture</strong> with skip connections.</li>
              <li>Built and trained using <strong>TensorFlow</strong> and <strong>Keras</strong>.</li>
              <li>Achieved <strong>93.3% accuracy</strong>, outperforming FCN.</li>
            </ul>
            <div className="project-actions">
              <a className="btn" href="https://github.com/MohanaBhavani/ImageSegmentation" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          {/* Student Outcome Prediction (OULAD) */}
          <div className="project-card">
           <img
  className="project-image"
  src="/assets/oulad-student-outcome.jpg"
  alt="Student outcome prediction charts"
  loading="lazy"
/>
            <h3>Student Outcome Prediction</h3>
            <ul>
              <li>Trained <strong>ML models</strong> on the <strong>OULAD</strong> dataset.</li>
              <li>Used <strong>activity, demographics, and assessments</strong> to predict outcomes.</li>
              <li>Compared <strong>Logistic Regression</strong>, <strong>Random Forest</strong>, <strong>SVM</strong>.</li>
              <li>Built and evaluated in <strong>Python</strong> with <strong>Scikit-learn</strong>.</li>
              <li>Achieved <strong>high prediction accuracy</strong> identifying at-risk students.</li>
            </ul>
            <div className="project-actions">
              <a className="btn" href="https://github.com/MohanaBhavani/student-success-prediction" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          {/* Loan Risk Prediction */}
          <div className="project-card">
            <img
  className="project-image"
  src="/assets/loan-risk-ml.jpg"
  alt="Loan risk ML model visual"
  loading="lazy"
/>
            <h3>Loan Risk Prediction</h3>
            <ul>
              <li>Developed a <strong>machine learning system</strong> to predict borrower risk for bank loans.</li>
              <li>Dataset of <strong>150,000+ applications</strong> and <strong>190+ features</strong>.</li>
              <li>Models: <strong>Random Forest</strong>, <strong>Logistic Regression</strong>, <strong>SVM</strong>, <strong>XGBoost</strong>, <strong>CatBoost</strong>, <strong>LightGBM</strong>.</li>
              <li>Applied <strong>SMOTE</strong>, <strong>stratified CV</strong>, and <strong>feature engineering</strong>.</li>
              <li>Built with <strong>Python</strong> and the <strong>Scikit-learn</strong> ecosystem.</li>
            </ul>
            <div className="project-actions">
              <a className="btn" href="https://github.com/MohanaBhavani/Bank-Loan-Risk-Assessment" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" data-aos="fade-up">
        <h2>Let’s Connect</h2>
        <div className="contact-container">
          <a
            href="mailto:mohanabhavani354@gmail.com"
            className="contact-item contact-with-text"
            title="Email"
          >
            <FaEnvelope className="contact-icon" />
            <span className="contact-text">mohanabhavani354@gmail.com</span>
          </a>

          <a
            href="https://linkedin.com/in/mohana-bhavani"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item contact-with-text"
            title="LinkedIn"
          >
            <FaLinkedin className="contact-icon" />
            <span className="contact-text">LinkedIn</span>
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
