import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer({ simple = false, showAuthors = false }) {
  if (simple) {
    return (
      <footer className="footer footer-simple">
        <div className="footer-inner">
          <p className="footer-text footer-text-simple">
            © 2026 Форум Россия-Китай. Все права защищены.
          </p>
          {showAuthors && (
            <p className="footer-authors">
              Ярков Иван, Сергей Шевчук, Лобанов Максим, Кузьменко Мария, Тарвердян Вилли
            </p>
          )}
        </div>
      </footer>
    )
  }

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          Прототип аналитического дашборда, разработанный в рамках курсового проекта
        </p>
        <Link to="/presentation" className="footer-link">
          Презентация проекта →
        </Link>
      </div>
    </footer>
  )
}
