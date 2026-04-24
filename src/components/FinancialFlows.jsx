import './FinancialFlows.css'

export default function FinancialFlows({ data }) {
  const { stages, lossPercent } = data
  const maxVal = Math.max(...stages.map((s) => s.value))

  return (
    <section className="financial card reveal">
      <div className="card-title">Финансовые потоки</div>
      <div className="flow-chart">
        {stages.map((stage, i) => (
          <div className="flow-item" key={i}>
            <div className="flow-bar-wrap">
              <div
                className="flow-bar"
                style={{ height: `${(stage.value / maxVal) * 100}%` }}
              />
            </div>
            <div className="flow-value">{stage.value} {stage.unit || ''}</div>
            <div className="flow-label">{stage.label}</div>
            {i < stages.length - 1 && (
              <div className="flow-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-4-4 4 4-4 4" stroke="#c7c7cc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flow-funnel-label">
        Снижение от плана к оплате: <strong>{lossPercent}%</strong>
      </div>
    </section>
  )
}
