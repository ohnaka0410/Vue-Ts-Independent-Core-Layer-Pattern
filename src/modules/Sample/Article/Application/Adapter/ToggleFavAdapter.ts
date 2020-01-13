import ToggleFavPort from '../../Core/Port/ToggleFavPort';
import Article from '../../Core/Model/Article';
import ArticleFav from '../../Core/Model/ArticleFav';

/**
 * お気に入り切り替えアダプタクラス
 */
export default class ToggleFavAdapter implements ToggleFavPort {
  /**
   * 記事取得処理
   */
  public async findArticle(articleId: number): Promise<Article | undefined> {
    console.log("findArticle");
    console.log(articleId);
    // call api
    // return dummy data
    return new Article(articleId);
  }
  /**
   * 記事お気に入り取得処理
   */
  public async findArticleFav(
    articleId: number,
    userId: number
  ): Promise<ArticleFav | undefined> {
    console.log("findArticleFav");
    console.log(articleId);
    console.log(userId);
    // call api
    // return dummy data
    const dummyArticleFavId =1;
    return new ArticleFav(articleId, userId, dummyArticleFavId);
  }
  /**
   * 記事お気に入り保存処理
   */
  public async saveArticleFav(articleFav: ArticleFav): Promise<void> {
    console.log("saveArticleFav");
    // call api
  }
  /**
   * 記事お気に入り削除処理
   */
  public async deleteArticleFav(articleFav: ArticleFav): Promise<void> {
    console.log("deleteArticleFav");
    // call api
  }
}
