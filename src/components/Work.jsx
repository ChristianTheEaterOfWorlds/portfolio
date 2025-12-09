import React, { useState, useEffect } from "react"
import "../Styles/Work.css"

// Load initial projects from localStorage or use defaults
const getInitialProjects = () => {
  const saved = localStorage.getItem('portfolio_projects')
  if (saved) {
    return JSON.parse(saved)
  }
  return [
    {
      id: 1,
      title: "Flutter Project",
      description: "A BMI calculator app that displays accurate BMI based on the inputs.",
      image: "/assets/mrbmi.jpg",
    },
    {
      id: 2,
      title: "Todo App",
      description: "A simple task manager using Node.js and MongoDB.",
      image: "/assets/portfoliopic.png",
    },
    {
      id: 3,
      title: "Business Landing Page",
      description: "Landing page for a small business with modern UI design.",
      image: "/assets/manFace.png",
    },
  ]
}

// Reusable Card component
const ProjectCard = ({ title, description, image, onDelete, isAdmin }) => {
  return (
    <div className="project-card" style={{ position: 'relative' }}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      {isAdmin && onDelete && (
        <button 
          onClick={onDelete}
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            padding: '4px 8px',
            fontSize: '12px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            background: '#dc3545',
            color: 'white'
          }}
        >
          Delete
        </button>
      )}
    </div>
  )
}

// Work Section
const Work = () => {
  const [projects, setProjects] = useState(getInitialProjects())
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') === '1')
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ title: '', description: '', image: '' })

  // Listen for admin status changes
  useEffect(() => {
    const checkAdmin = () => setIsAdmin(localStorage.getItem('isAdmin') === '1')
    const interval = setInterval(checkAdmin, 500)
    return () => clearInterval(interval)
  }, [])

  // Save projects to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('portfolio_projects', JSON.stringify(projects))
  }, [projects])

  function handleAddProject(e) {
    e.preventDefault()
    const newProject = {
      id: Date.now(),
      title: form.title,
      description: form.description,
      image: form.image
    }
    setProjects([...projects, newProject])
    setForm({ title: '', description: '', image: '' })
    setShowForm(false)
  }

  function handleDeleteProject(id) {
    if (confirm('Delete this project?')) {
      setProjects(projects.filter(p => p.id !== id))
    }
  }

  return (
    <section className="work-section">
      <h2>MY WORK</h2>
      <p>Here are some projects I've worked on recently</p>

      {isAdmin && (
        <div style={{ marginBottom: 40, maxWidth: '800px', margin: '30px auto 40px' }}>
          {!showForm ? (
            <button 
              onClick={() => setShowForm(true)}
              style={{
                padding: '12px 28px',
                fontSize: '15px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                background: '#4b0082',
                color: 'white',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(75, 0, 130, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#360062'
                e.target.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#4b0082'
                e.target.style.transform = 'translateY(0)'
              }}
            >
              + Add Project
            </button>
          ) : (
            <div style={{
              background: 'white',
              padding: '30px',
              borderRadius: '10px',
              border: '2px solid #4b0082',
              boxShadow: '0 4px 20px rgba(75, 0, 130, 0.15)'
            }}>
              <h3 style={{ 
                marginTop: 0, 
                marginBottom: 25,
                fontSize: '24px',
                fontWeight: '600',
                color: '#333',
                textAlign: 'center'
              }}>Add New Project</h3>
              <form onSubmit={handleAddProject}>
                <input
                  type="text"
                  placeholder="Project Title"
                  value={form.title}
                  onChange={e => setForm({ ...form, title: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    marginBottom: '16px',
                    fontSize: '15px',
                    border: '2px solid #4b0082',
                    borderRadius: '5px',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#360062'}
                  onBlur={(e) => e.target.style.borderColor = '#4b0082'}
                />
                <input
                  type="text"
                  placeholder="Image URL (e.g., /assets/image.jpg for public folder)"
                  value={form.image}
                  onChange={e => setForm({ ...form, image: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    marginBottom: '16px',
                    fontSize: '15px',
                    border: '2px solid #4b0082',
                    borderRadius: '5px',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#360062'}
                  onBlur={(e) => e.target.style.borderColor = '#4b0082'}
                />
                <textarea
                  placeholder="Project Description"
                  value={form.description}
                  onChange={e => setForm({ ...form, description: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    marginBottom: '20px',
                    fontSize: '15px',
                    border: '2px solid #4b0082',
                    borderRadius: '5px',
                    minHeight: '100px',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#360062'}
                  onBlur={(e) => e.target.style.borderColor = '#4b0082'}
                />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <button 
                    type="submit"
                    style={{
                      padding: '14px 24px',
                      fontSize: '16px',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      background: '#4b0082',
                      color: 'white',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 8px rgba(75, 0, 130, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#360062'
                      e.target.style.transform = 'translateY(-2px)'
                      e.target.style.boxShadow = '0 4px 12px rgba(75, 0, 130, 0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#4b0082'
                      e.target.style.transform = 'translateY(0)'
                      e.target.style.boxShadow = '0 2px 8px rgba(75, 0, 130, 0.3)'
                    }}
                  >
                    Add Project
                  </button>
                  <button 
                    type="button"
                    onClick={() => {
                      setShowForm(false)
                      setForm({ title: '', description: '', image: '' })
                    }}
                    style={{
                      padding: '14px 24px',
                      fontSize: '16px',
                      border: '2px solid #4b0082',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      background: 'white',
                      color: '#4b0082',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#4b0082'
                      e.target.style.color = 'white'
                      e.target.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'white'
                      e.target.style.color = '#4b0082'
                      e.target.style.transform = 'translateY(0)'
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            isAdmin={isAdmin}
            onDelete={() => handleDeleteProject(project.id)}
          />
        ))}
      </div>
    </section>
  )
}

export default Work

