import { Link } from 'react-router-dom'
import { categoryNames } from '../data'

export default function ArticleCard({ article, large = false }) {
  return (
    <Link to={`/article/${article.slug}`} className="card">
      {article.image && (
        <img className="card-img" src={article.image} alt={article.title} loading="lazy" />
      )}
      <div className="card-body">
        <div className="card-category">{categoryNames[article.category] || article.category}</div>
        <h3 className={`card-title${large ? ' hero-title' : ''}`}>{article.title}</h3>
        {article.excerpt && <p className="card-excerpt">{article.excerpt}</p>}
        <div className="card-meta">
          <span>📅 {article.date}</span>
          {article.author && <span>✍️ {article.author}</span>}
        </div>
      </div>
    </Link>
  )
}
