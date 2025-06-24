import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Achievements from './components/pages/Achievements';
import Education from './components/pages/Education';
import Contact from './components/pages/Contact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/education" element={<Education />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}