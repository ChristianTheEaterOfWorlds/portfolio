import React, { useState } from 'react'

const ADMIN_CODE = 'Admin67tetetesahur'

export default function AdminLoginModal({ onClose, onSuccess }) {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (code === ADMIN_CODE) {
      localStorage.setItem('isAdmin', '1')
      setError('')
      onSuccess()
      onClose()
    } else {
      setError('Incorrect admin code')
    }
  }

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} style={closeButtonStyle}>✕</button>
        <h3 style={{ marginTop: 0, marginBottom: 20, fontSize: '24px', color: '#333', textAlign: 'center' }}>Admin Login</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter admin code"
            value={code}
            onChange={e => setCode(e.target.value)}
            style={inputStyle}
            autoFocus
          />
          {error && <div style={{ color: '#dc3545', marginTop: 8, fontSize: 14, textAlign: 'center' }}>{error}</div>}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 20 }}>
            <button type="submit" style={loginButtonStyle} 
              onMouseEnter={(e) => {
                e.target.style.background = '#360062'
                e.target.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#4b0082'
                e.target.style.transform = 'translateY(0)'
              }}>
              Login
            </button>
            <button type="button" onClick={onClose} style={cancelButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.background = '#4b0082'
                e.target.style.color = 'white'
                e.target.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'white'
                e.target.style.color = '#4b0082'
                e.target.style.transform = 'translateY(0)'
              }}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999
}

const modalStyle = {
  background: 'white',
  padding: '30px',
  borderRadius: '10px',
  width: '400px',
  maxWidth: '90%',
  position: 'relative',
  boxShadow: '0 4px 20px rgba(75, 0, 130, 0.2)',
  border: '2px solid #4b0082'
}

const closeButtonStyle = {
  position: 'absolute',
  right: '12px',
  top: '12px',
  background: 'transparent',
  border: 'none',
  fontSize: '24px',
  cursor: 'pointer',
  color: '#4b0082',
  fontWeight: 'bold',
  transition: 'color 0.3s'
}

const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  fontSize: '15px',
  border: '2px solid #4b0082',
  borderRadius: '5px',
  marginTop: '12px',
  boxSizing: 'border-box',
  outline: 'none',
  transition: 'border-color 0.3s'
}

const loginButtonStyle = {
  padding: '14px 24px',
  fontSize: '16px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  background: '#4b0082',
  color: 'white',
  fontWeight: '600',
  transition: 'all 0.3s',
  boxShadow: '0 2px 8px rgba(75, 0, 130, 0.3)'
}

const cancelButtonStyle = {
  padding: '14px 24px',
  fontSize: '16px',
  border: '2px solid #4b0082',
  borderRadius: '5px',
  cursor: 'pointer',
  background: 'white',
  color: '#4b0082',
  fontWeight: '600',
  transition: 'all 0.3s'
}
