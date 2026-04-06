import type { Article } from '../../types'

const ArticleCard = ({article}: {article: Article}) => {
    return (
        <main>
        <h1>{article.title}</h1>
        </main>
        
        
    
    )
}

export default ArticleCard