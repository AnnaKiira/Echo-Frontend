import type { Article } from '../../types'

const ArticleCard = ({article}: {article: Article}) => {
    return (
            <article>

                <header>
                    {article.urlToImage ? <img src={article.urlToImage} alt={article.title} /> : null}
                    <h2>{article.title}</h2>
                    <span> 
                        {article.source.name ? article.source.name : "Unknown Source"}
                    </span>

                </header>

            </article>
    )
}

export default ArticleCard