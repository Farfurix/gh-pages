import './KpiCards.css'

const kpiMeta = [
  { key: 'volume', label: 'Объём закупок', color: '#4a7cff' },
  { key: 'procedures', label: 'Количество процедур', color: '#34c759' },
  { key: 'avgParticipants', label: 'Среднее число участников', color: '#ffb830' },
  { key: 'singleSupplier', label: 'Доля у одного поставщика', color: '#ff3b30' },
]

export default function KpiCards({ data }) {
  return (
    <section className="kpi-section reveal">
      <div className="kpi-grid">
        {kpiMeta.map((meta) => {
          const kpi = data[meta.key]
          return (
            <div className="kpi-card card" key={meta.key} style={{ '--kpi-accent': meta.color }}>
              <div className="kpi-label">{meta.label}</div>
              <div className="kpi-value">
                <span className="kpi-number">{kpi.value}</span>
                {kpi.unit && <span className="kpi-unit">{kpi.unit}</span>}
              </div>
              <div className="kpi-bar">
                <div className="kpi-bar-fill" style={{ width: `${kpi.bar}%` }} />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
