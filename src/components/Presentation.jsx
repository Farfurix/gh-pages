import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Presentation.css'

export default function Presentation() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [dark, setDark] = useState(true)
  const slideRefs = useRef([])
  const containerRef = useRef(null)
  const activeSlideRef = useRef(0)
  const totalSlides = 9

  /* Dark theme by default; restore on unmount */
  useEffect(() => {
    const prev = document.documentElement.getAttribute('data-theme') || 'dark'
    document.documentElement.setAttribute('data-theme', 'dark')
    return () => document.documentElement.setAttribute('data-theme', prev)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  /* Observe slides for active tracking + sequential element reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.idx)
            setActiveSlide(idx)
            activeSlideRef.current = idx
            const els = entry.target.querySelectorAll('.pr')
            els.forEach((el, i) => {
              setTimeout(() => el.classList.add('pr-visible'), i * 120)
            })
          }
        })
      },
      { threshold: 0.15 },
    )
    slideRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  /* Auto-focus container + arrow key navigation */
  useEffect(() => {
    containerRef.current?.focus()
    function handleKey(e) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault()
        const next = Math.min(activeSlideRef.current + 1, totalSlides - 1)
        activeSlideRef.current = next
        slideRefs.current[next]?.scrollIntoView({ behavior: 'smooth' })
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault()
        const prev = Math.max(activeSlideRef.current - 1, 0)
        activeSlideRef.current = prev
        slideRefs.current[prev]?.scrollIntoView({ behavior: 'smooth' })
      }
    }
    const el = containerRef.current
    el?.addEventListener('keydown', handleKey)
    return () => el?.removeEventListener('keydown', handleKey)
  }, [])

  function scrollTo(i) {
    slideRefs.current[i]?.scrollIntoView({ behavior: 'smooth' })
  }

  const ref = (i) => (el) => { slideRefs.current[i] = el }

  return (
    <div className="presentation" ref={containerRef} tabIndex={-1}>
      {/* Top bar */}
      <Link to="/" className="pres-back">← Вернуться к дашборду</Link>

      <button className="pres-theme-toggle" onClick={() => setDark((d) => !d)} aria-label="Тема">
        {dark ? (
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="4" fill="currentColor"/>
            <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="10" y1="1" x2="10" y2="3"/><line x1="10" y1="17" x2="10" y2="19"/>
              <line x1="1" y1="10" x2="3" y2="10"/><line x1="17" y1="10" x2="19" y2="10"/>
              <line x1="3.64" y1="3.64" x2="5.05" y2="5.05"/><line x1="14.95" y1="14.95" x2="16.36" y2="16.36"/>
              <line x1="3.64" y1="16.36" x2="5.05" y2="14.95"/><line x1="14.95" y1="5.05" x2="16.36" y2="3.64"/>
            </g>
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M17.39 11.77A7.5 7.5 0 0 1 8.23 2.61a7.5 7.5 0 1 0 9.16 9.16Z" fill="currentColor"/>
          </svg>
        )}
      </button>

      {/* Right navigation dots */}
      <nav className="pres-nav">
        {Array.from({ length: totalSlides }, (_, i) => (
          <button
            key={i}
            className={`pres-nav-dot ${activeSlide === i ? 'active' : ''}`}
            onClick={() => scrollTo(i)}
            aria-label={`Слайд ${i + 1}`}
          >
            <span className="pres-nav-num">{i + 1}</span>
          </button>
        ))}
      </nav>

      {/* ---- SLIDE 1 — Hero ---- */}
      <section ref={ref(0)} data-idx="0" className="pres-slide pres-slide--hero">
        <div className="pres-inner">
          <div className="pres-num">1 / {totalSlides}</div>
          <div className="pres-hero">
            <p className="pres-hero-label">Научный проект</p>
            <h1 className="pres-hero-title">Разработка концепции ситуационного центра аналитического сопровождения государственных закупок</h1>
            <p className="pres-hero-authors">Арефьева-Бельская Анна · Ярков Иван</p>
            <p className="pres-hero-tags">Федеральное казначейство · Система государственных закупок · Цифровая аналитика</p>
          </div>
        </div>
      </section>

      {/* ---- SLIDE 2 — Problem (split layout) ---- */}
      <section ref={ref(1)} data-idx="1" className="pres-slide">
        <div className="pres-inner">
          <div className="pres-num pr">2 / {totalSlides}</div>
          <p className="pres-label pr">Текущее состояние</p>
          <h2 className="pres-title pr">Проблема аналитического использования данных госзакупок</h2>

          <div className="pres-split pr">
            <div className="pres-split-left">
              <p className="pres-text">В системе госзакупок сформирован значительный массив данных в ЕИС и системах Федерального казначейства. Однако данные используются преимущественно для отчётности и контрольных функций — не для управления.</p>
            </div>
            <div className="pres-split-right">
              <div className="pres-card-sm pr">
                <div className="pres-card-sm-icon">📊</div>
                <h3>Разрозненность данных</h3>
                <p>Информация о контрактах, поставщиках и ценах не интегрирована в единую аналитическую среду.</p>
              </div>
              <div className="pres-card-sm pr">
                <div className="pres-card-sm-icon">🔍</div>
                <h3>Отсутствие аналитики</h3>
                <p>Нет механизма преобразования данных в управленческие решения.</p>
              </div>
              <div className="pres-card-sm pr">
                <div className="pres-card-sm-icon">⚠️</div>
                <h3>Реактивный контроль</h3>
                <p>Проблемы выявляются уже после возникновения нарушений, а не превентивно.</p>
              </div>
            </div>
          </div>

          <div className="pres-warning pres-warning--yellow pr">
            Данные о закупках не трансформируются в управленческую аналитику
          </div>
        </div>
      </section>

      {/* ---- SLIDE 3 — Stats ---- */}
      <section ref={ref(2)} data-idx="2" className="pres-slide">
        <div className="pres-inner">
          <div className="pres-num pr">3 / {totalSlides}</div>
          <p className="pres-label pr">Ключевые показатели</p>
          <h2 className="pres-title pr">Проявление проблемы в системе государственных закупок</h2>

          <div className="pres-stats pr">
            <div className="pres-stat pr">
              <div className="pres-stat-value">2,2</div>
              <div className="pres-stat-caption">Заявки на процедуру</div>
              <div className="pres-stat-desc">Среднее число участников — индикатор низкой конкуренции</div>
            </div>
            <div className="pres-stat pr">
              <div className="pres-stat-value">22%</div>
              <div className="pres-stat-caption">Закупки у единственного поставщика</div>
              <div className="pres-stat-desc">Высокий риск непрозрачности и ценового сговора</div>
            </div>
            <div className="pres-stat pr">
              <div className="pres-stat-value">94%</div>
              <div className="pres-stat-caption">Несостоявшихся процедур</div>
              <div className="pres-stat-desc">Доля несостоявшихся закупок из-за отсутствия конкуренции</div>
            </div>
            <div className="pres-stat pr">
              <div className="pres-stat-value">12 трлн</div>
              <div className="pres-stat-caption">Объём закупок по 44-ФЗ</div>
              <div className="pres-stat-desc">Масштаб проблемы неэффективного управления</div>
            </div>
          </div>

          <div className="pres-warning pres-warning--red pr">
            Система функционирует при низком уровне конкуренции и высоких рисках неэффективного расходования средств
          </div>
        </div>
      </section>

      {/* ---- SLIDE 4 — Limitations ---- */}
      <section ref={ref(3)} data-idx="3" className="pres-slide">
        <div className="pres-inner">
          <div className="pres-num pr">4 / {totalSlides}</div>
          <p className="pres-label pr">Системный разрыв</p>
          <h2 className="pres-title pr">Ключевые ограничения действующей модели управления закупками</h2>

          <p className="pres-text pr">Между участниками закупочного процесса отсутствует единая информационно-аналитическая среда. Каждый орган работает с собственными данными, не имея целостной картины. Это приводит к тому, что управленческие решения принимаются на основе неполной информации, а нарушения устраняются реактивно — уже после их наступления.</p>

          <div className="pres-grid-2x2 pr">
            <div className="pres-card-icon pr">
              <div className="pres-card-icon-circle">🏢</div>
              <h3>Изолированные системы</h3>
              <p>Каждый орган работает с собственными данными</p>
            </div>
            <div className="pres-card-icon pr">
              <div className="pres-card-icon-circle">📋</div>
              <h3>Неполная информация</h3>
              <p>Нет целостной картины закупочного процесса</p>
            </div>
            <div className="pres-card-icon pr">
              <div className="pres-card-icon-circle">🔄</div>
              <h3>Реактивный подход</h3>
              <p>Нарушения устраняются после их наступления</p>
            </div>
            <div className="pres-card-icon pr">
              <div className="pres-card-icon-circle">🔗</div>
              <h3>Нужна интеграция</h3>
              <p>Переход к единой аналитической платформе</p>
            </div>
          </div>

          <div className="pres-warning pres-warning--yellow pr">
            Требуется переход от разрозненного контроля к интегрированной аналитической платформе
          </div>
        </div>
      </section>

      {/* ---- SLIDE 5 — Solution (2x2 grid) ---- */}
      <section ref={ref(4)} data-idx="4" className="pres-slide">
        <div className="pres-inner">
          <div className="pres-num pr">5 / {totalSlides}</div>
          <p className="pres-label pr">Предлагаемое решение</p>
          <h2 className="pres-title pr">Ситуационный центр аналитического сопровождения государственных закупок</h2>

          <p className="pres-text pr">Предлагается создание ситуационного центра на базе Федерального казначейства — единой платформы интеграции, обработки и анализа данных о закупочной деятельности.</p>

          <div className="pres-grid-2x2 pr">
            <div className="pres-card-icon pr">
              <div className="pres-card-icon-circle">🗄️</div>
              <h3>Единая среда данных</h3>
              <p>Интеграция ЕИС, Казначейства и контрольных органов в одну аналитическую платформу</p>
            </div>
            <div className="pres-card-icon pr">
              <div className="pres-card-icon-circle">📡</div>
              <h3>Мониторинг в реальном времени</h3>
              <p>Непрерывное отслеживание закупочной деятельности и финансовых потоков</p>
            </div>
            <div className="pres-card-icon pr">
              <div className="pres-card-icon-circle">🛡️</div>
              <h3>Раннее выявление рисков</h3>
              <p>Автоматическая идентификация отклонений, сговора и концентрации поставщиков</p>
            </div>
            <div className="pres-card-icon pr">
              <div className="pres-card-icon-circle">📈</div>
              <h3>Поддержка решений</h3>
              <p>Формирование аналитических выводов для органов государственной власти</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- SLIDE 6 — Architecture / Flow ---- */}
      <section ref={ref(5)} data-idx="5" className="pres-slide">
        <div className="pres-inner">
          <div className="pres-num pr">6 / {totalSlides}</div>
          <p className="pres-label pr">Архитектура системы</p>
          <h2 className="pres-title pr">Модель функционирования ситуационного центра</h2>

          <div className="pres-flow pr">
            <div className="pres-flow-item pr">
              <div className="pres-flow-num">1</div>
              <div className="pres-flow-label">Источники</div>
              <div className="pres-flow-desc">ЕИС, Казначейство, контрольные органы</div>
              <div className="pres-flow-arrow">→</div>
            </div>
            <div className="pres-flow-item pr">
              <div className="pres-flow-num">2</div>
              <div className="pres-flow-label">Интеграция</div>
              <div className="pres-flow-desc">Объединение данных в единую платформу</div>
              <div className="pres-flow-arrow">→</div>
            </div>
            <div className="pres-flow-item pr">
              <div className="pres-flow-num">3</div>
              <div className="pres-flow-label">Аналитика</div>
              <div className="pres-flow-desc">Обработка, выявление рисков, мониторинг</div>
              <div className="pres-flow-arrow">→</div>
            </div>
            <div className="pres-flow-item pr">
              <div className="pres-flow-num">4</div>
              <div className="pres-flow-label">Решения</div>
              <div className="pres-flow-desc">Управленческие рекомендации органам власти</div>
            </div>
          </div>

          <p className="pres-text pres-text--footer pr">Данные из ключевых источников объединяются в единую систему, проходят аналитическую обработку и визуализируются на дашборде. Результаты обеспечивают основу для оперативных управленческих решений органов государственной власти.</p>
        </div>
      </section>

      {/* ---- SLIDE 7 — Dashboard ---- */}
      <section ref={ref(6)} data-idx="6" className="pres-slide">
        <div className="pres-inner">
          <div className="pres-num pr">7 / {totalSlides}</div>
          <p className="pres-label pr">Инструмент оперативного анализа</p>
          <h2 className="pres-title pr">Аналитический дашборд ситуационного центра</h2>

          <p className="pres-text pr">Дашборд — ключевой элемент ситуационного центра, обеспечивающий визуализацию и интерпретацию данных в режиме реального времени.</p>

          <div className="pres-grid-2x2 pr">
            <div className="pres-card-icon pr">
              <div className="pres-card-icon-circle">📊</div>
              <h3>Общая аналитика</h3>
              <p>Сводные показатели закупочной деятельности региона</p>
            </div>
            <div className="pres-card-icon pr">
              <div className="pres-card-icon-circle">💰</div>
              <h3>Финансовые потоки</h3>
              <p>Движение средств от планирования к оплате</p>
            </div>
            <div className="pres-card-icon pr">
              <div className="pres-card-icon-circle">🚨</div>
              <h3>Риск-индикаторы</h3>
              <p>Автоматическое выявление зон повышенного внимания</p>
            </div>
            <div className="pres-card-icon pr">
              <div className="pres-card-icon-circle">📋</div>
              <h3>Мониторинг контрактов</h3>
              <p>Отслеживание сроков и качества исполнения</p>
            </div>
          </div>

          <div className="pres-indicators pr">
            <div className="pres-indicator">
              <span className="pres-dot" style={{ background: '#ff3b30' }} />
              <div><strong>Красный</strong> — Критические отклонения, требующие немедленного реагирования</div>
            </div>
            <div className="pres-indicator">
              <span className="pres-dot" style={{ background: '#ffb830' }} />
              <div><strong>Жёлтый</strong> — Зоны повышенного внимания и потенциальных рисков</div>
            </div>
            <div className="pres-indicator">
              <span className="pres-dot" style={{ background: '#34c759' }} />
              <div><strong>Зелёный</strong> — Нормальное функционирование без отклонений</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- SLIDE 8 — Prototype ---- */}
      <section ref={ref(7)} data-idx="7" className="pres-slide">
        <div className="pres-inner">
          <div className="pres-num pr">8 / {totalSlides}</div>
          <p className="pres-label pr">Прототип цифрового решения</p>
          <h2 className="pres-title pr">Практическая реализация проекта</h2>

          <p className="pres-text pr">В рамках проекта разработан веб-интерфейс аналитического дашборда ситуационного центра — функциональный прототип, демонстрирующий ключевые возможности платформы.</p>

          <div className="pres-card-highlight pr">
            <h3>Статус разработки</h3>
            <p>Концепция представлена в виде готового цифрового продукта — интерактивного прототипа, пригодного для демонстрации заинтересованным органам власти. Прототип подтверждает техническую реализуемость решения и служит основой для полноценного внедрения.</p>
          </div>

          <div className="pres-grid-3 pr">
            <div className="pres-card-sm pr">
              <div className="pres-card-sm-icon">📊</div>
              <h3>Визуализация КПЭ</h3>
              <p>Ключевые показатели закупочной деятельности и финансовых потоков</p>
            </div>
            <div className="pres-card-sm pr">
              <div className="pres-card-sm-icon">🛡️</div>
              <h3>Риск-мониторинг</h3>
              <p>Отслеживание риск-индикаторов в режиме, приближённом к реальному времени</p>
            </div>
            <div className="pres-card-sm pr">
              <div className="pres-card-sm-icon">🚦</div>
              <h3>Цветовая система</h3>
              <p>Зелёный / жёлтый / красный для мгновенной идентификации проблемных зон</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- SLIDE 9 — Results ---- */}
      <section ref={ref(8)} data-idx="8" className="pres-slide">
        <div className="pres-inner">
          <div className="pres-num pr">9 / {totalSlides}</div>
          <p className="pres-label pr">Эффекты от реализации</p>
          <h2 className="pres-title pr">Ожидаемые результаты внедрения</h2>

          <div className="pres-grid-2x2 pr">
            <div className="pres-result pr">
              <h3>Прозрачность бюджетных расходов</h3>
              <p>Повышение открытости и подотчётности расходования государственных средств</p>
            </div>
            <div className="pres-result pr">
              <h3>Снижение коррупционных рисков</h3>
              <p>Раннее выявление ценовых отклонений, сговора и концентрации поставщиков</p>
            </div>
            <div className="pres-result pr">
              <h3>Переход к превентивному анализу</h3>
              <p>От реактивного контроля постфактум — к проактивному управлению рисками</p>
            </div>
            <div className="pres-result pr">
              <h3>Качество управленческих решений</h3>
              <p>Федеральное казначейство и органы власти получают аналитическую основу для эффективного управления закупками</p>
            </div>
          </div>

          <div className="pres-warning pres-warning--green pr">
            Реализация проекта обеспечивает системный переход к доказательному управлению государственными закупками
          </div>
        </div>
      </section>
    </div>
  )
}
