import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import './Forum.css'

export default function Forum() {
  return (
    <div className="forum">
      <Header simple />
      <main className="forum-main">
        <div className="forum-hero">
          <h1 className="forum-title">РОССИЯ-КИТАЙ</h1>
          <h2 className="forum-subtitle">Форум экономического сотрудничества</h2>
        </div>

        <div className="forum-buttons">
          <Link to="/invitation" className="forum-btn">
            <span className="btn-icon">📋</span>
            <span className="btn-text">Приглашение</span>
          </Link>

          <Link to="/program" className="forum-btn">
            <span className="btn-icon">📅</span>
            <span className="btn-text">Программа пребывания гостя</span>
          </Link>

          <Link to="/budget" className="forum-btn">
            <span className="btn-icon">💰</span>
            <span className="btn-text">Смета расходов</span>
          </Link>

          <Link to="/info-materials" className="forum-btn">
            <span className="btn-icon">📚</span>
            <span className="btn-text">Информационно-справочные материалы</span>
          </Link>
        </div>
      </main>
      <Footer simple showAuthors />
    </div>
  )
}
