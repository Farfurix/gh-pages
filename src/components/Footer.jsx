import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
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
