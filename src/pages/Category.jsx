import { useParams } from 'react-router-dom'
import { getArticlesByCategory, categoryNames, categories } from '../data'
import ArticleCard from '../components/ArticleCard'

export default function Category() {
  const { category } = useParams()
  const items = getArticlesByCategory(category)
  const name = categoryNames[category] || category

  return (
    <main className="container" style={{ padding: '28px 20px 60px' }}>
      <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 20 }}>
        قسم {name}
      </h2>
      {items.length === 0 ? (
        <div className="empty">
          <h2>لا توجد مقالات في هذا القسم بعد</h2>
          <p>سيتم إضافة محتوى قريباً</p>
        </div>
      ) : (
        <div className="grid cols-2">
          {items.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
      )}
    </main>
  )
}
