import { useEffect, useState, useRef } from 'react'
import './PageNavigation.css'

export default function PageNavigation({ sections }) {
  const [activeSection, setActiveSection] = useState('')
  const observerRef = useRef(null)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, options)

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observerRef.current.observe(element)
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [sections])

  function scrollToSection(id) {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -160
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  return (
    <nav className="page-navigation">
      <ul className="nav-list">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
