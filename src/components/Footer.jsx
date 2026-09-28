import { Link } from 'react-router-dom'
import { categories } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 8, color: 'var(--text)' }}>
          جزيرة <span style={{ color: 'var(--accent)' }}>عربي</span>
        </div>
        <div style={{ marginBottom: 12 }}>
          {categories.map((c, i) => (
            <span key={c.slug}>
              {i > 0 && ' · '}
              <Link to={c.slug === 'home' ? '/' : `/${c.slug}`} style={{ color: 'var(--muted)' }}>
                {c.name}
              </Link>
            </span>
          ))}
        </div>
        <p>جميع الحقوق محفوظة © {new Date().getFullYear()} جزيرة عربي</p>
      </div>
    </footer>
  )
}
