import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-indigo-600">
            Tech Insights
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li><a href="#trends" className="text-gray-700 hover:text-indigo-600 transition-colors">Trends</a></li>
            <li><a href="#ai" className="text-gray-700 hover:text-indigo-600 transition-colors">AI</a></li>
            <li><a href="#vr" className="text-gray-700 hover:text-indigo-600 transition-colors">VR/AR</a></li>
            <li><a href="#ethics" className="text-gray-700 hover:text-indigo-600 transition-colors">Ethics</a></li>
            <li><a href="#comments" className="text-gray-700 hover:text-indigo-600 transition-colors">Discuss</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-600"></span>
            <span className="w-6 h-0.5 bg-gray-600"></span>
            <span className="w-6 h-0.5 bg-gray-600"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <ul className="space-y-2">
              <li><a href="#trends" className="block py-2 text-gray-700 hover:text-indigo-600">Trends</a></li>
              <li><a href="#ai" className="block py-2 text-gray-700 hover:text-indigo-600">AI</a></li>
              <li><a href="#vr" className="block py-2 text-gray-700 hover:text-indigo-600">VR/AR</a></li>
              <li><a href="#ethics" className="block py-2 text-gray-700 hover:text-indigo-600">Ethics</a></li>
              <li><a href="#comments" className="block py-2 text-gray-700 hover:text-indigo-600">Discuss</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
