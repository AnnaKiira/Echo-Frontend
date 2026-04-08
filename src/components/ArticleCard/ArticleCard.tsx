import type { Article } from '../../types'
import styles from './ArticleCard.module.css'

const ArticleCard = ({article}: {article: Article}) => {
    return (
            <article className={styles.newsCard}>

                <header>
                    {article.urlToImage ? <img className={styles.newsImage} src={article.urlToImage} alt={article.title} /> : null}
                    <h3 className={styles.newsTitle}>{article.title}</h3>
                    <span className={styles.newsSource}> 
                        {article.source.name ? article.source.name : "Unknown Source"}
                    </span>

                </header>

            </article>
    )
}

export default ArticleCard