import React from 'react';
import { VscRemote, VscError, VscWarning, VscBell, VscFeedback, VscCheck } from 'react-icons/vsc';
import { IoIosGitBranch } from 'react-icons/io';

export default function Footer() {
  const handleBranchClick = () => {
    window.open('https://github.com/manirht/your-portfolio-repo', '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-item remote" onClick={handleBranchClick}>
          <VscRemote className="footer-icon" />
        </div>
        <div className="footer-item branch" onClick={handleBranchClick}>
          <IoIosGitBranch className="footer-icon" />
          <span>main</span>
        </div>
        <div className="footer-item errors">
          <VscError className="footer-icon" />
          <span>0</span>
          <VscWarning className="footer-icon" />
          <span>0</span>
        </div>
      </div>
      
      <div className="footer-right">
        <div className="footer-item prettier">
          <VscCheck className="footer-icon" />
          <span>Prettier</span>
        </div>
        <div className="footer-item">
          <VscFeedback className="footer-icon" />
        </div>
        <div className="footer-item">
          <VscBell className="footer-icon" />
        </div>
      </div>
    </footer>
  );
}