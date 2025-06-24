import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Sidebar from './components/layout/Sidebar';
import AppTree from './components/layout/AppTree';
import AppButtons from './components/layout/AppButtons';
import Footer from './components/layout/Footer';
import AppRoutes from './routes';
import usePageTracking from './hooks/usePageTracking';
import { useState } from 'react';

export default function App() {
  const [expanded, setExpanded] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [visiblePageIndexs, setVisiblePageIndexs] = useState([0, 1, 2, 3, 4, 5, 6]);
  
  usePageTracking();

  const pages = [
    { index: 0, name: 'home.md', route: '/', visible: true },
    { index: 1, name: 'experience.md', route: '/experience', visible: true },
    { index: 2, name: 'projects.md', route: '/projects', visible: true },
    { index: 3, name: 'skills.md', route: '/skills', visible: true },
    { index: 4, name: 'achievements.md', route: '/achievements', visible: true },
    { index: 5, name: 'education.md', route: '/education', visible: true },
    { index: 6, name: 'contact.md', route: '/contact', visible: true },
  ];

  return (
    <ThemeProvider>
      <div className="app-container">
        <div className="sidebar-container">
          <Sidebar 
            expanded={expanded} 
            setExpanded={setExpanded} 
          />
          {expanded && (
            <div className="explorer-panel">
              <div className="explorer-title">EXPLORER</div>
              <AppTree
                pages={pages}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                visiblePageIndexs={visiblePageIndexs}
                setVisiblePageIndexs={setVisiblePageIndexs}
              />
            </div>
          )}
        </div>
        
        <div className="main-content">
          <AppButtons
            pages={pages.filter(page => visiblePageIndexs.includes(page.index))}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            visiblePageIndexs={visiblePageIndexs}
            setVisiblePageIndexs={setVisiblePageIndexs}
          />
          
          <div className="content-area">
            <AppRoutes />
          </div>
          
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}