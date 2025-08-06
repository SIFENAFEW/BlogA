import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">TechInsights</h1>
            <p className="text-primary-100 mt-1">Exploring the latest in technology and innovation</p>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-primary-200 transition-colors">Home</a>
            <a href="#about" className="hover:text-primary-200 transition-colors">About</a>
            <a href="#contact" className="hover:text-primary-200 transition-colors">Contact</a>
          </nav>
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
