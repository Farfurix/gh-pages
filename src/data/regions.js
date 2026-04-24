const regionsData = {
  'zaporozhskaya': {
    name: 'Запорожская область',
    kpi: {
      volume: { value: '12,4', unit: 'трлн ₽', bar: 60 },
      procedures: { value: '3,2', unit: 'млн', bar: 70 },
      avgParticipants: { value: '2,2', unit: '', bar: 80 },
      singleSupplier: { value: '22', unit: '%', bar: 90 },
    },
    financial: {
      stages: [
        { label: 'Планирование', value: 51.3, unit: 'млрд' },
        { label: 'Контракты', value: 42.6, unit: 'млрд' },
        { label: 'Исполнение', value: 31.8, unit: 'млрд' },
        { label: 'Оплата', value: 26.4, unit: 'млрд' },
      ],
      lossPercent: 49,
    },
    risks: [
      { label: 'Низкая конкуренция', value: 35, sublabel: 'закупок', level: 'red' },
      { label: 'Демпинг цен', value: 18, sublabel: 'процедур', level: 'yellow' },
      { label: 'Проблемы исполнения', value: 12, sublabel: 'контрактов', level: 'red' },
    ],
    contracts: {
      onTime: 68,
      violations: 22,
      terminated: 10,
    },
    procurements: [
      { customer: 'Минздрав', price: '2,3 млрд ₽', participants: 1, status: 'Исполнение', risk: 'red' },
      { customer: 'Минобр', price: '890 млн ₽', participants: 4, status: 'Завершён', risk: 'green' },
      { customer: 'МВД', price: '1,1 млрд ₽', participants: 2, status: 'Исполнение', risk: 'yellow' },
      { customer: 'Минтранс', price: '3,7 млрд ₽', participants: 1, status: 'Нарушение', risk: 'red' },
      { customer: 'Росимущество', price: '540 млн ₽', participants: 6, status: 'Завершён', risk: 'green' },
    ],
  },
  'moscow': {
    name: 'Москва и МО',
    kpi: {
      volume: { value: '2,9', unit: 'трлн ₽', bar: 95 },
      procedures: { value: '312', unit: 'тыс.', bar: 92 },
      avgParticipants: { value: '4,1', unit: '', bar: 95 },
      singleSupplier: { value: '9', unit: '%', bar: 30 },
    },
    financial: {
      stages: [
        { label: 'Планирование', value: 3.18, unit: 'трлн' },
        { label: 'Контракты', value: 2.9, unit: 'трлн' },
        { label: 'Исполнение', value: 2.71, unit: 'трлн' },
        { label: 'Оплата', value: 2.58, unit: 'трлн' },
      ],
      lossPercent: 19,
    },
    risks: [
      { label: 'Низкая конкуренция', value: 8, sublabel: 'закупок', level: 'green' },
      { label: 'Демпинг цен', value: 6, sublabel: 'процедур', level: 'green' },
      { label: 'Проблемы исполнения', value: 4, sublabel: 'контрактов', level: 'green' },
    ],
    contracts: {
      onTime: 89,
      violations: 8,
      terminated: 3,
    },
    procurements: [
      { customer: 'Депздрав Москвы', price: '18,2 млрд ₽', participants: 7, status: 'Завершён', risk: 'green' },
      { customer: 'Деп. образования', price: '5,4 млрд ₽', participants: 5, status: 'Завершён', risk: 'green' },
      { customer: 'Мосгортранс', price: '12,1 млрд ₽', participants: 4, status: 'Исполнение', risk: 'green' },
      { customer: 'ДКС г. Москвы', price: '8,9 млрд ₽', participants: 3, status: 'Исполнение', risk: 'yellow' },
      { customer: 'ДТСЗН', price: '2,1 млрд ₽', participants: 6, status: 'Завершён', risk: 'green' },
    ],
  },
  'tula': {
    name: 'Тульская область',
    kpi: {
      volume: { value: '67,3', unit: 'млрд ₽', bar: 45 },
      procedures: { value: '14,2', unit: 'тыс.', bar: 50 },
      avgParticipants: { value: '2,8', unit: '', bar: 70 },
      singleSupplier: { value: '18', unit: '%', bar: 72 },
    },
    financial: {
      stages: [
        { label: 'Планирование', value: 82.1, unit: 'млрд' },
        { label: 'Контракты', value: 67.3, unit: 'млрд' },
        { label: 'Исполнение', value: 52.4, unit: 'млрд' },
        { label: 'Оплата', value: 44.6, unit: 'млрд' },
      ],
      lossPercent: 46,
    },
    risks: [
      { label: 'Низкая конкуренция', value: 22, sublabel: 'закупок', level: 'yellow' },
      { label: 'Демпинг цен', value: 14, sublabel: 'процедур', level: 'yellow' },
      { label: 'Проблемы исполнения', value: 9, sublabel: 'контрактов', level: 'yellow' },
    ],
    contracts: {
      onTime: 74,
      violations: 18,
      terminated: 8,
    },
    procurements: [
      { customer: 'Минздрав ТО', price: '1,2 млрд ₽', participants: 3, status: 'Исполнение', risk: 'yellow' },
      { customer: 'Деп. образования', price: '430 млн ₽', participants: 5, status: 'Завершён', risk: 'green' },
      { customer: 'УГИБДД', price: '680 млн ₽', participants: 2, status: 'Исполнение', risk: 'yellow' },
      { customer: 'Тулаавтодор', price: '2,1 млрд ₽', participants: 1, status: 'Нарушение', risk: 'red' },
      { customer: 'Деп. ЖКХ', price: '310 млн ₽', participants: 4, status: 'Завершён', risk: 'green' },
    ],
  },
}

export const regionKeys = Object.keys(regionsData)

export function getRegion(key) {
  return regionsData[key]
}

export function getRiskScore(key) {
  const r = regionsData[key]
  const avgRisk = r.risks.reduce((s, x) => s + x.value, 0) / r.risks.length
  const singleSupp = parseFloat(r.kpi.singleSupplier.value.replace(',', '.'))
  const onTime = r.contracts.onTime
  const terminated = r.contracts.terminated
  // Lower = better. Scale 0–100
  const score = Math.round(
    avgRisk * 0.4 +
    singleSupp * 0.2 +
    (100 - onTime) * 0.25 +
    terminated * 0.15
  )
  return Math.min(100, Math.max(0, score))
}

export function getGrade(score) {
  if (score <= 15) return { grade: 'A', color: 'var(--green)', label: 'Минимальный риск' }
  if (score <= 30) return { grade: 'B', color: 'var(--green)', label: 'Низкий риск' }
  if (score <= 50) return { grade: 'C', color: 'var(--yellow)', label: 'Средний риск' }
  return { grade: 'D', color: 'var(--red)', label: 'Высокий риск' }
}

export default regionsData
