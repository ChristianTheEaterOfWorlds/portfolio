import React from "react"

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
          Christian Roque
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#home" className="text-gray-700 hover:text-sky-600 transition-colors font-medium">Home</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-sky-600 transition-colors font-medium">About</a></li>
            <li><a href="#work" className="text-gray-700 hover:text-sky-600 transition-colors font-medium">Work</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
