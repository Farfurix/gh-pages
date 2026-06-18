import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer({ simple = false }) {
  if (simple) {
    return (
      <footer className="footer footer-simple">
        <div className="footer-inner">
          <p className="footer-text footer-text-simple">
            © 2026 Форум Россия-Китай. Все права защищены.
          </p>
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
