import React, { useState } from 'react';
import { FaFolder, FaFolderOpen, FaFileCode } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function AppTree({
  pages,
  selectedIndex,
  setSelectedIndex,
  visiblePageIndexs,
  setVisiblePageIndexs
}) {
  const navigate = useNavigate();
  const [openSections, setOpenSections] = useState({
    portfolio: true,
    experience: true,
    projects: true
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handlePageClick = (page) => {
    if (!visiblePageIndexs.includes(page.index)) {
      setVisiblePageIndexs([...visiblePageIndexs, page.index]);
    }
    setSelectedIndex(page.index);
    navigate(page.route);
  };

  return (
    <div className="app-tree">
      <div 
        className="tree-item root"
        onClick={() => toggleSection('portfolio')}
      >
        {openSections.portfolio ? 
          <FaFolderOpen className="file-icon" /> : 
          <FaFolder className="file-icon" />
        }
        <span>ROHIT.PORTFOLIO</span>
      </div>
      
      {openSections.portfolio && (
        <div className="tree-folder">
          {pages.map((page) => (
            <div 
              key={page.index}
              className={`tree-item ${selectedIndex === page.index ? 'active' : ''}`}
              onClick={() => handlePageClick(page)}
            >
              <FaFileCode className="file-icon" />
              <span>{page.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}