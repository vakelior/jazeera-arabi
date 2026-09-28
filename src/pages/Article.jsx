import { useParams, Link } from 'react-router-dom'
import { getArticleBySlug, categoryNames } from '../data'

export default function Article() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)

  if (!article) {
    return (
      <div className="article-page">
        <div className="empty">
          <h2>المقالة غير موجودة</h2>
          <p>عذراً، لم يتم العثور على المقالة المطلوبة</p>
          <Link to="/" className="back-btn">العودة للرئيسية</Link>
        </div>
      </div>
    )
  }

  return (
    <main className="article-page">
      <Link to="/" className="back-btn">← العودة</Link>
      <article>
        <header className="article-header">
          <span className="article-category">{categoryNames[article.category]}</span>
          <h1 className="article-title">{article.title}</h1>
          <div className="article-meta">
            <span>📅 {article.date}</span>
            {article.author && <span>✍️ {article.author}</span>}
          </div>
        </header>
        {article.image && (
          <img className="article-img" src={article.image} alt={article.title} />
        )}
        <div className="article-body">
          {article.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>
    </main>
  )
}
