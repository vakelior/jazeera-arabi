import { articles, breakingNews } from '../data'
import ArticleCard from '../components/ArticleCard'
import Ticker from '../components/Ticker'

export default function Home() {
  const [featured, ...rest] = articles
  const topStories = articles.slice(1, 5)
  const latest = articles.slice(5)

  return (
    <main>
      <Ticker items={breakingNews} />
      <div className="container layout">
        <div className="grid">
          <div className="grid cols-2">
            <div className="hero" style={{ gridColumn: 'span 2' }}>
              <ArticleCard article={featured} large />
            </div>
            {topStories.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
          <div className="grid cols-2" style={{ marginTop: 24 }}>
            {latest.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        </div>
        <Sidebar />
      </div>
    </main>
  )
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="widget">
        <h3 className="widget-title">الأكثر قراءة</h3>
        {articles.slice(0, 5).map((a, i) => (
          <ArticleMini key={a.id} article={a} index={i + 1} />
        ))}
      </div>
    </aside>
  )
}

import { Link } from 'react-router-dom'
function ArticleMini({ article, index }) {
  return (
    <Link to={`/article/${article.slug}`} className="list-item">
      <span className="list-item-num">{index}</span>
      <span className="list-item-title">{article.title}</span>
    </Link>
  )
}
