"use client";

import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-foreground">Navbar</h1>
      <button className="text-foreground" onClick={toggleDarkMode}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;