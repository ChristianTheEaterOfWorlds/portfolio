import React, { useState } from "react"
import "../Styles/Header.css"
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
        <a href="https://docs.google.com/document/d/12AScH3jLcHTt8h6miiqrYh3HuryeIIF3/edit?usp=sharing&ouid=104794617499536631306&rtpof=true&sd=true" className="btn-outline" target="_blank">My Resume</a>
        <a href= "https://www.facebook.com/share/p/1Aj8SSNKsS/"  className="btn-primary" target="_blank">Hire Me Now</a>
        {!isAdmin ? (
          <button 
            onClick={() => setShowLoginModal(true)}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '24px',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#4b0082',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            title="Admin Login"
          >
            🔐
          </button>
        ) : (
          <button 
            onClick={handleLogout}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '24px',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#4b0082',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            title="Logout"
          >
            🚪
          </button>
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
