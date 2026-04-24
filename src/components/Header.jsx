import { useState, useRef, useEffect } from 'react'
import regionsData, { regionKeys } from '../data/regions'
import './Header.css'

export default function Header({
  activeRegion,
  setActiveRegion,
  compareMode,
  setCompareMode,
  compareRegions,
  setCompareRegions,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [dark, setDark] = useState(() => {
    return document.documentElement.getAttribute('data-theme') === 'dark'
  })
  const dropdownRef = useRef(null)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function handleRegionClick(key) {
    if (compareMode) {
      setCompareRegions((prev) =>
        prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
      )
    } else {
      setActiveRegion(key)
      setDropdownOpen(false)
    }
  }

  function handleToggleCompare() {
    const next = !compareMode
    setCompareMode(next)
    if (next) {
      setCompareRegions([activeRegion])
    } else {
      // Fix: restore activeRegion from first selected compare region
      if (compareRegions.length > 0) {
        setActiveRegion(compareRegions[0])
      }
      setCompareRegions([])
    }
  }

  const currentName = regionsData[activeRegion].name
  const needsHint = compareMode && compareRegions.length < 2

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <div className="header-logo">
            <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
              <rect width="20" height="20" rx="4" fill="#4a7cff"/>
              <path d="M5 10h10M10 5v10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h1 className="header-title">Ситуационный центр госзакупок</h1>
        </div>

        <div className="header-right">
          {/* Compare toggle */}
          <label className="toggle-wrap">
            <input
              type="checkbox"
              checked={compareMode}
              onChange={handleToggleCompare}
              className="toggle-input"
            />
            <span className="toggle-track">
              <span className="toggle-thumb" />
            </span>
            <span className="toggle-label">Сравнение</span>
          </label>

          {/* Region selector */}
          <div className="region-selector" ref={dropdownRef}>
            <button
              className="region-btn"
              onClick={() => setDropdownOpen((v) => !v)}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="region-icon">
                <path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5Zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" fill="currentColor"/>
              </svg>
              {compareMode
                ? compareRegions.length === 0
                  ? 'Выберите регионы'
                  : `Выбрано: ${compareRegions.length}`
                : currentName}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`chevron ${dropdownOpen ? 'open' : ''}`}>
                <path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {dropdownOpen && (
              <div className="region-dropdown">
                {regionKeys.map((key) => {
                  const isSelected = compareMode
                    ? compareRegions.includes(key)
                    : key === activeRegion
                  return (
                    <button
                      key={key}
                      className={`region-option ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleRegionClick(key)}
                    >
                      {compareMode && (
                        <span className={`check-box ${isSelected ? 'checked' : ''}`}>
                          {isSelected && (
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </span>
                      )}
                      {regionsData[key].name}
                      {!compareMode && isSelected && (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="check-icon">
                          <path d="M3 7l3 3 5-5" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  )
                })}
                {compareMode && needsHint && (
                  <div className="dropdown-hint">Выберите регионы для сравнения</div>
                )}
              </div>
            )}
          </div>

          <span className="header-date">
            {new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>

          {/* Theme toggle */}
          <button
            className="theme-toggle"
            onClick={() => setDark((d) => !d)}
            aria-label="Переключить тему"
          >
            {dark ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="4" fill="currentColor"/>
                <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="10" y1="1" x2="10" y2="3"/>
                  <line x1="10" y1="17" x2="10" y2="19"/>
                  <line x1="1" y1="10" x2="3" y2="10"/>
                  <line x1="17" y1="10" x2="19" y2="10"/>
                  <line x1="3.64" y1="3.64" x2="5.05" y2="5.05"/>
                  <line x1="14.95" y1="14.95" x2="16.36" y2="16.36"/>
                  <line x1="3.64" y1="16.36" x2="5.05" y2="14.95"/>
                  <line x1="14.95" y1="5.05" x2="16.36" y2="3.64"/>
                </g>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M17.39 11.77A7.5 7.5 0 0 1 8.23 2.61a7.5 7.5 0 1 0 9.16 9.16Z" fill="currentColor"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
