import Article from '../Model/Article';
import ArticleFav from '../Model/ArticleFav';

/**
 * お気に入り切り替えIF
 */
export default interface ToggleFavPort {
  /**
   * 記事取得処理
   */
  findArticle(articleId: number): Promise<Article | undefined>;
  /**
   * 記事お気に入り取得処理
   */
  findArticleFav(
    articleId: number,
    userId: number
  ): Promise<ArticleFav | undefined>;
  /**
   * 記事お気に入り保存処理
   */
  saveArticleFav(articleFav: ArticleFav): Promise<void>;
  /**
   * 記事お気に入り削除処理
   */
  deleteArticleFav(articleFav: ArticleFav): Promise<void>;
}
