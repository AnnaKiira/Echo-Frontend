import { useState, useEffect } from 'react'
import './App.css'
import type { Article } from './types'
import ArticleCard from './components/ArticleCard/ArticleCard'

function App() {
  const  [newsData, setNewsData] = useState<Article[]>([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/newsarticles`)
      .then(response => response.json())
      .then(data => {
        console.log(data.articles)
        setNewsData(data.articles)
      })
      .catch(error => console.error('Error fetching news data:', error))
  }, [])

  return (
    <>

    {newsData.map(article => (
    <ArticleCard key={article.url} article={article} />
     ))}
    
    
    
    
    </>
  )
}

export default App
