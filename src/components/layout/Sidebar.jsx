import React from 'react';
import { VscFiles, VscSettingsGear } from 'react-icons/vsc';
import { BiGitBranch } from 'react-icons/bi';
import { FaSun, FaMoon } from 'react-icons/fa';
import { SiCodeforces, SiCodechef, SiLeetcode } from 'react-icons/si';
import { FaTrophy } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

export default function Sidebar({ expanded, setExpanded }) {
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();

  const codingProfiles = [
    { 
      icon: <SiCodeforces />, 
      title: 'Codeforces', 
      url: 'https://codeforces.com/profile/rohit221004' 
    },
    { 
      icon: <SiCodechef />, 
      title: 'CodeChef', 
      url: 'https://www.codechef.com/users/rohit221004' 
    },
    { 
      icon: <SiLeetcode />, 
      title: 'LeetCode', 
      url: 'https://leetcode.com/rohit221004/' 
    },
    { 
      icon: <FaTrophy />, 
      title: 'AtCoder', 
      url: 'https://atcoder.jp/users/rohit221004' 
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div 
          className={`sidebar-icon ${expanded ? 'active' : ''}`}
          onClick={() => setExpanded(!expanded)}
          title="Explorer"
        >
          <VscFiles />
        </div>
        <a
          href="https://github.com/manirht/your-portfolio-repo"
          target="_blank"
          rel="noreferrer"
          className="sidebar-icon"
          title="Source Code"
        >
          <BiGitBranch />
        </a>
        
        {codingProfiles.map((profile, index) => (
          <a
            key={index}
            href={profile.url}
            target="_blank"
            rel="noreferrer"
            className="sidebar-icon"
            title={profile.title}
          >
            {profile.icon}
          </a>
        ))}
      </div>

      <div className="sidebar-bottom">
        <div 
          className="sidebar-icon"
          onClick={toggleTheme}
          title={darkMode ? "Light Mode" : "Dark Mode"}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </div>
        <div 
          className="sidebar-icon"
          onClick={() => navigate('/contact')}
          title="Contact"
        >
          <VscSettingsGear />
        </div>
        <div 
          className="sidebar-icon"
          onClick={() => navigate('/docs')}
          title="Documentation"
        >
          <VscSettingsGear />
        </div>
      </div>
    </div>
  );
}