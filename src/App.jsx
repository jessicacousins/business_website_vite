import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <h2>Business Website</h2>
          </div>
          <ul className="nav-menu">
            <li>
              <button
                onClick={() => scrollToSection("hero")}
                className={activeSection === "hero" ? "active" : ""}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className={activeSection === "about" ? "active" : ""}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className={activeSection === "services" ? "active" : ""}
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className={activeSection === "contact" ? "active" : ""}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-line">Creating Amazing</span>
            <span className="title-line">Digital Experiences</span>
          </h1>
          <p className="hero-subtitle">
            We craft beautiful, functional, and user-centered digital solutions
            that drive results and inspire engagement.
          </p>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("services")}
            >
              Our Services
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="element element-1"></div>
            <div className="element element-2"></div>
            <div className="element element-3"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <h2>About Our Vision</h2>
            <p>Transforming ideas into exceptional digital realities</p>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <div className="card-icon">
                <div className="icon innovation"></div>
              </div>
              <h3>Innovation</h3>
              <p>
                Pushing boundaries with cutting-edge technology and creative
                solutions.
              </p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <div className="icon quality"></div>
              </div>
              <h3>Quality</h3>
              <p>
                Delivering excellence in every pixel, interaction, and user
                experience.
              </p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <div className="icon collaboration"></div>
              </div>
              <h3>Collaboration</h3>
              <p>Working closely with clients to bring their vision to life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive digital solutions tailored to your needs</p>
          </div>
          <div className="services-grid">
            <div className="service-item">
              <h3>Web Development</h3>
              <p>
                Modern, responsive websites built with the latest technologies
                and best practices.
              </p>
              <div className="service-features">
                <span>React & Vue.js</span>
                <span>Responsive Design</span>
                <span>Performance Optimized</span>
              </div>
            </div>
            <div className="service-item">
              <h3>UI/UX Design</h3>
              <p>
                User-centered design that combines aesthetics with functionality
                for optimal experiences.
              </p>
              <div className="service-features">
                <span>User Research</span>
                <span>Prototyping</span>
                <span>Design Systems</span>
              </div>
            </div>
            <div className="service-item">
              <h3>Digital Strategy</h3>
              <p>
                Strategic planning and consulting to maximize your digital
                presence and growth.
              </p>
              <div className="service-features">
                <span>Market Analysis</span>
                <span>Brand Strategy</span>
                <span>Growth Planning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Let's Work Together</h2>
            <p>
              Ready to bring your vision to life? Get in touch with us today.
            </p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h4>Email</h4>
                <p>hello@email.com</p>
              </div>
              <div className="contact-item">
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="contact-item">
                <h4>Location</h4>
                <p>San Francisco, CA</p>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Business Website</h3>
              <p>Creating digital experiences that matter.</p>
            </div>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#careers">Careers</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 JMC Resources. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
