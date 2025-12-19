import React from "react"

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent">
          Christian Roque
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><a href="#home" className="text-gray-700 hover:text-purple-800 transition-colors font-medium">Home</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-purple-800 transition-colors font-medium">About</a></li>
            <li><a href="#work" className="text-gray-700 hover:text-purple-800 transition-colors font-medium">Work</a></li>
          </ul>
        </nav>
        <div className="flex gap-3">
          <a href="/assets/CV-Roque-Christian.pdf" target="_blank" rel="noopener noreferrer" className="px-5 py-2 border-2 border-purple-800 text-purple-800 rounded-lg hover:bg-purple-800 hover:text-white transition-all font-semibold">
            Resume
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
