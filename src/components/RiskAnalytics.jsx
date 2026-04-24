import './RiskAnalytics.css'

const levelConfig = {
  red: { color: 'var(--red)', bg: 'var(--red-bg)', icon: '●' },
  yellow: { color: 'var(--yellow)', bg: 'var(--yellow-bg)', icon: '●' },
  green: { color: 'var(--green)', bg: 'var(--green-bg)', icon: '●' },
}

export default function RiskAnalytics({ data }) {
  const hasRed = data.some((r) => r.level === 'red')

  return (
    <section className="risk card reveal">
      <div className="card-title">
        Риск-аналитика
        {hasRed && <span className="risk-badge">Требует внимания</span>}
      </div>

      <div className="risk-list">
        {data.map((risk, i) => {
          const cfg = levelConfig[risk.level]
          return (
            <div className="risk-item" key={i} style={{ '--risk-bg': cfg.bg, '--risk-color': cfg.color }}>
              <div className="risk-indicator">
                <span className="risk-dot" style={{ color: cfg.color }}>{cfg.icon}</span>
              </div>
              <div className="risk-info">
                <div className="risk-label">{risk.label}</div>
                <div className="risk-sublabel">{risk.sublabel}</div>
              </div>
              <div className="risk-value" style={{ color: cfg.color }}>{risk.value}%</div>
            </div>
          )
        })}
      </div>

      <div className="risk-legend">
        <span className="legend-item"><span style={{ color: 'var(--green)' }}>●</span> Норма</span>
        <span className="legend-item"><span style={{ color: 'var(--yellow)' }}>●</span> Риск</span>
        <span className="legend-item"><span style={{ color: 'var(--red)' }}>●</span> Проблема</span>
      </div>
    </section>
  )
}
