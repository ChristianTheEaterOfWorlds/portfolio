import React, { useState } from "react"
import "../styles/Header.css"
import AdminLoginModal from './AdminLoginModal'

function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') === '1')

  function handleLogout() {
    localStorage.removeItem('isAdmin')
    setIsAdmin(false)
  }

  function handleLoginSuccess() {
    setIsAdmin(true)
  }

  return (
    <nav className="header">
      <div className="logo">Christian Roqu<a href="https://github.com" target ="_blank">e</a></div> 
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#mywork">My Work</a></li>
      </ul>
      <div className="nav-buttons">
        <a href="#resume" className="btn-outline">My Resume</a>
        <a href= "https://www.facebook.com/share/p/1Aj8SSNKsS/"  className="btn-primary" target="_blank">Hire Me Now</a>
        {!isAdmin ? (
          <button className="btn-outline" onClick={() => setShowLoginModal(true)}>Admin</button>
        ) : (
          <button className="btn-outline" onClick={handleLogout}>Logout</button>
        )}
      </div>
      {showLoginModal && (
        <AdminLoginModal 
          onClose={() => setShowLoginModal(false)} 
          onSuccess={handleLoginSuccess}
        />
      )}
    </nav>
  )
}

export default Header
