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
        <h3>Admin Login</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter admin code"
            value={code}
            onChange={e => setCode(e.target.value)}
            style={inputStyle}
            autoFocus
          />
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <button type="submit" style={buttonStyle}>Login</button>
            <button type="button" onClick={onClose} style={buttonStyle}>Cancel</button>
          </div>
          {error && <div style={{ color: 'red', marginTop: 8, fontSize: 14 }}>{error}</div>}
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
  background: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999
}

const modalStyle = {
  background: 'white',
  padding: '24px',
  borderRadius: '8px',
  width: '400px',
  maxWidth: '90%',
  position: 'relative',
  boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
}

const closeButtonStyle = {
  position: 'absolute',
  right: '8px',
  top: '8px',
  background: 'transparent',
  border: 'none',
  fontSize: '20px',
  cursor: 'pointer',
  color: '#666'
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '14px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  marginTop: '8px'
}

const buttonStyle = {
  padding: '8px 16px',
  fontSize: '14px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  background: '#007bff',
  color: 'white',
  flex: 1
}
