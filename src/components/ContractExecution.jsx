import './ContractExecution.css'

export default function ContractExecution({ data }) {
  const segments = [
    { label: 'Выполнено в срок', value: data.onTime, color: 'var(--green)', bg: 'var(--green-bg)' },
    { label: 'С нарушениями', value: data.violations, color: 'var(--yellow)', bg: 'var(--yellow-bg)' },
    { label: 'Расторгнуты', value: data.terminated, color: 'var(--red)', bg: 'var(--red-bg)' },
  ]

  return (
    <section className="contracts card reveal">
      <div className="card-title">Исполнение контрактов</div>

      <div className="donut-wrap">
        <svg viewBox="0 0 120 120" className="donut">
          {segments.reduce((acc, seg, i) => {
            const offset = acc.offset
            const dash = (seg.value / 100) * 314
            const gap = 314 - dash
            acc.elements.push(
              <circle
                key={i}
                cx="60" cy="60" r="50"
                fill="none"
                stroke={seg.color}
                strokeWidth="12"
                strokeDasharray={`${dash} ${gap}`}
                strokeDashoffset={-offset}
                strokeLinecap="round"
                className="donut-segment"
                style={{ '--delay': `${i * 0.2}s` }}
              />
            )
            acc.offset = offset + dash
            return acc
          }, { offset: 0, elements: [] }).elements}
        </svg>
        <div className="donut-center">
          <span className="donut-value">{data.onTime}%</span>
          <span className="donut-label">в срок</span>
        </div>
      </div>

      <div className="contract-legend">
        {segments.map((seg, i) => (
          <div className="contract-legend-item" key={i}>
            <span className="contract-dot" style={{ background: seg.color }} />
            <span className="contract-legend-label">{seg.label}</span>
            <span className="contract-legend-value">{seg.value}%</span>
          </div>
        ))}
      </div>
    </section>
  )
}
