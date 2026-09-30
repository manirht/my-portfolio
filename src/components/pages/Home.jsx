import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMedium,
  FaBlog,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import profileImage from "../../assets/dp.jpg";

const links = [
  { icon: <FaGithub />, href: "https://github.com/manirht", title: "GitHub" },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/manirohit/",
    title: "LinkedIn",
  },
  {
    icon: <FaEnvelope />,
    href: "mailto:manirohit221004@gmail.com",
    title: "Email",
  },
  // { icon: <FaMedium />, href: 'https://medium.com/@rohit', title: 'Medium' },
  // { icon: <FaBlog />, href: 'https://rohit-blog.com', title: 'Blog' },
];

export default function Home() {
  return (
    <div className="home-page">
      <div className="container">
        <div className="hero-content">
          <div className="logo-container">
            <img src={profileImage} alt="Mani Rohit Chennakesavula Profile" className="logo" />
          </div>
          <div className="text-content">
            <h1>Mani Rohit Chennakesavula</h1>
            <h2>Software Engineer</h2>
            <p>
              Software Engineering Intern at Tekion Corp focused on building
              high-scale backend systems and practical developer tools. I enjoy
              turning complex problems into reliable, efficient solutions.
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
            <Link to="/contact" className="btn" style={{ marginTop: "20px" }}>
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
