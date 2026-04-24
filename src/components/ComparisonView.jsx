import regionsData, { getRiskScore, getGrade } from '../data/regions'
import './ComparisonView.css'

const COLORS = ['#4a7cff', '#34c759', '#ff9500', '#ff3b30', '#af52de']

export default function ComparisonView({ regionKeys }) {
  const regions = regionKeys.map((key, i) => {
    const data = regionsData[key]
    const score = getRiskScore(key)
    const grade = getGrade(score)
    return { key, data, score, grade, color: COLORS[i % COLORS.length] }
  })

  const sorted = [...regions].sort((a, b) => a.score - b.score)
  const winner = sorted[0]

  const criteria = [
    {
      label: 'Низкая конкуренция',
      getValue: (r) => r.data.risks[0].value,
      unit: '%',
      lowerBetter: true,
    },
    {
      label: 'Демпинг цен',
      getValue: (r) => r.data.risks[1].value,
      unit: '%',
      lowerBetter: true,
    },
    {
      label: 'Проблемы исполнения',
      getValue: (r) => r.data.risks[2].value,
      unit: '%',
      lowerBetter: true,
    },
    {
      label: 'Доля у одного поставщика',
      getValue: (r) => parseFloat(r.data.kpi.singleSupplier.value.replace(',', '.')),
      unit: '%',
      lowerBetter: true,
    },
    {
      label: 'Выполнено в срок',
      getValue: (r) => r.data.contracts.onTime,
      unit: '%',
      lowerBetter: false,
    },
    {
      label: 'Расторгнуто',
      getValue: (r) => r.data.contracts.terminated,
      unit: '%',
      lowerBetter: true,
    },
    {
      label: 'Среднее число участников',
      getValue: (r) => parseFloat(r.data.kpi.avgParticipants.value.replace(',', '.')),
      unit: '',
      lowerBetter: false,
    },
  ]

  return (
    <div className="comparison reveal visible">
      {/* Overall score cards */}
      <div className="comp-header">
        <h2 className="comp-title">Сравнение регионов</h2>
        <p className="comp-subtitle">Итоговый рейтинг по совокупности рисков</p>
      </div>

      <div className="comp-scores">
        {sorted.map((r, i) => (
          <div
            key={r.key}
            className={`comp-score-card card ${i === 0 ? 'winner' : ''}`}
          >
            {i === 0 && <div className="winner-badge">Минимальный риск</div>}
            <div className="comp-rank">#{i + 1}</div>
            <div className="comp-region-name">{r.data.name}</div>
            <div className="comp-grade" style={{ color: r.grade.color }}>
              {r.grade.grade}
            </div>
            <div className="comp-score-value">{r.score}</div>
            <div className="comp-score-label">баллов риска</div>
            <div className="comp-score-bar-wrap">
              <div
                className="comp-score-bar"
                style={{
                  width: `${r.score}%`,
                  background: r.grade.color,
                }}
              />
            </div>
            <div className="comp-grade-label" style={{ color: r.grade.color }}>
              {r.grade.label}
            </div>
          </div>
        ))}
      </div>

      {/* Detailed criteria comparison */}
      <div className="comp-details card">
        <div className="card-title">Сравнение по критериям</div>
        <div className="comp-criteria">
          {criteria.map((c) => {
            const values = regions.map((r) => ({
              region: r,
              value: c.getValue(r),
            }))
            const best = c.lowerBetter
              ? Math.min(...values.map((v) => v.value))
              : Math.max(...values.map((v) => v.value))
            const maxVal = Math.max(...values.map((v) => v.value), 1)

            return (
              <div className="criterion" key={c.label}>
                <div className="criterion-label">{c.label}</div>
                <div className="criterion-bars">
                  {values.map((v) => {
                    const isBest = v.value === best
                    const pct = (v.value / maxVal) * 100
                    return (
                      <div className="criterion-row" key={v.region.key}>
                        <div className="criterion-region">{v.region.data.name}</div>
                        <div className="criterion-bar-wrap">
                          <div
                            className={`criterion-bar ${isBest ? 'best' : ''}`}
                            style={{
                              width: `${Math.max(pct, 4)}%`,
                              background: isBest ? 'var(--green)' : v.region.color,
                            }}
                          />
                        </div>
                        <div className={`criterion-value ${isBest ? 'best-val' : ''}`}>
                          {v.value}{c.unit}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
