import React from 'react';
import { VscFiles, VscSettingsGear, VscAccount} from 'react-icons/vsc';
import { BiGitBranch } from 'react-icons/bi';
import { FaSun, FaMoon } from 'react-icons/fa';
import { SiCodeforces, SiCodechef, SiLeetcode } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

export default function Sidebar({ expanded, setExpanded }) {
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();

  const codingProfiles = [
    { 
      icon: <SiCodeforces />, 
      title: 'Codeforces', 
      url: 'https://codeforces.com/profile/manirht_45' 
    },
    { 
      icon: <SiCodechef />, 
      title: 'CodeChef', 
      url: 'https://www.codechef.com/users/manirht45' 
    },
    { 
      icon: <SiLeetcode />, 
      title: 'LeetCode', 
      url: 'https://leetcode.com/u/manirht_45/' 
    },
    { 
      icon: <img src="src\assets\logo_bk.svg" alt="AtCoder Logo" style={{ width: '1em', height: '1em' }} />,
      title: 'AtCoder', 
      url: 'https://atcoder.jp/users/manirht_45' 
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
          href="https://github.com/manirht/my-portfolio"
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
          <VscAccount />
        </div>
       <a
          href="https://react.dev/learn" // Link to official React documentation
          target="_blank"
          rel="noreferrer"
          className="sidebar-icon"
          title="React Documentation" // Updated title
        >
          <VscSettingsGear />
        </a>
      </div>
    </div>
  );
}