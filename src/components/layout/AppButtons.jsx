import React from 'react';
import { VscChromeClose, VscMarkdown } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

export default function AppButtons({
  pages,
  selectedIndex,
  setSelectedIndex,
  visiblePageIndexs,
  setVisiblePageIndexs
}) {
  const navigate = useNavigate();

  const handleTabClick = (page) => {
    setSelectedIndex(page.index);
    navigate(page.route);
  };

  const handleCloseTab = (e, index) => {
    e.stopPropagation();
    const newIndexs = visiblePageIndexs.filter(x => x !== index);
    setVisiblePageIndexs(newIndexs);
    
    // If closing the active tab, switch to first visible tab
    if (selectedIndex === index && newIndexs.length > 0) {
      const firstIndex = newIndexs[0];
      setSelectedIndex(firstIndex);
      const firstPage = pages.find(p => p.index === firstIndex);
      if (firstPage) navigate(firstPage.route);
    }
  };

  return (
    <div className="app-buttons">
      {pages
        .filter(page => visiblePageIndexs.includes(page.index))
        .map((page) => (
          <div 
            key={page.index}
            className={`tab ${selectedIndex === page.index ? 'active' : ''}`}
            onClick={() => handleTabClick(page)}
          >
            <VscMarkdown className="tab-icon" />
            <span>{page.name}</span>
            <div 
              className="close-btn"
              onClick={(e) => handleCloseTab(e, page.index)}
            >
              <VscChromeClose />
            </div>
          </div>
        ))}
    </div>
  );
}