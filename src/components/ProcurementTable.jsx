import './ProcurementTable.css'

const riskLabels = { red: 'Высокий', yellow: 'Средний', green: 'Низкий' }

export default function ProcurementTable({ data }) {
  return (
    <section className="table-section card reveal">
      <div className="card-title">Реестр закупок</div>
      <div className="table-wrap">
        <table className="proc-table">
          <thead>
            <tr>
              <th>Заказчик</th>
              <th>Цена</th>
              <th>Уч.</th>
              <th>Статус</th>
              <th>Риск</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                <td className="cell-customer">{row.customer}</td>
                <td>{row.price}</td>
                <td className="cell-center">{row.participants}</td>
                <td>
                  <span className={`status-badge status-${row.risk}`}>{row.status}</span>
                </td>
                <td>
                  <span className={`risk-tag risk-tag-${row.risk}`}>
                    {riskLabels[row.risk]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
