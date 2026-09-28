import { Link, useLocation } from 'react-router-dom'
import { categories, categoryNames } from '../data'

export default function Header({ theme, toggleTheme }) {
  const location = useLocation()
  const currentCat = location.pathname.replace('/', '') || 'home'

  return (
    <>
      <header className="topbar">
        <div className="container topbar-inner">
          <Link to="/" className="logo">
            جزيرة <span className="logo-accent">عربي</span>
          </Link>
          <div className="topbar-actions">
            <button className="icon-btn" onClick={toggleTheme} title="تبديل الوضع">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      <nav className="navbar">
        <div className="container nav-inner">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to={c.slug === 'home' ? '/' : `/${c.slug}`}
              className={`nav-link ${currentCat === c.slug ? 'active' : ''}`}
            >
              {c.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}
