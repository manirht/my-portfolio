import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMedium, FaBlog } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';

const links = [
  { icon: <FaGithub />, href: 'https://github.com/manirht', title: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/manirohit/', title: 'LinkedIn' },
  { icon: <FaEnvelope />, href: 'mailto:manirohit221004@gmail.com', title: 'Email' },
  // { icon: <FaMedium />, href: 'https://medium.com/@rohit', title: 'Medium' },
  // { icon: <FaBlog />, href: 'https://rohit-blog.com', title: 'Blog' },
];

export default function Home() {
  const { darkMode } = useTheme();
const profileImage = 'src/assets/dp.jpg';
  return (
    <div className="home-page">
      <div className="container">
        <div className="hero-content">
          <div className="logo-container">
            <img
              src={profileImage} 
              alt="Mani Rohit Profile"
              className="logo" 
            />
          </div>
          <div className="text-content">
            <h1>Mani Rohit</h1>
            <h2>Full Stack Developer & Competitive Programmer</h2>
            <p>
              I build robust web applications and solve complex algorithmic problems. 
              Currently pursuing my Bachelor's in Computer Science at IIIT Lucknow 
              with a passion for creating efficient solutions.
            </p>
            <div className="social-links">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  title={link.title}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <Link to="/contact" className="btn" style={{ marginTop: '20px' }}>
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}