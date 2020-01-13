import ToggleFavPort from '../Port/ToggleFavPort';
import NotFoundException from '../Exception/NotFoundException';
import Article from '../Model/Article';
import ArticleFav from '../Model/ArticleFav';

/**
 * お気に入り切り替えユースケースクラス
 */
export default class ToggleFav {
  /**
   * お気に入り切り替え実装ポート
   */
  private port: ToggleFavPort;

  /**
   * コンストラクタ
   */
  public constructor(port: ToggleFavPort) {
    this.port = port;
  }

  /**
   * ユースケース実行処理
   */
  public async run(
    articleId: number,
    on: boolean,
    userId: number
  ): Promise<void> {
    if (!articleId) {
      throw new NotFoundException('articleId not found');
    }

    const article: Article | undefined = await this.port.findArticle(articleId);
    if (!article) {
      throw new NotFoundException('Article not found');
    }

    const articleFav: ArticleFav | undefined = await this.port.findArticleFav(
      article.getId(),
      userId
    );

    if (on) {
      await this.port.saveArticleFav(
        articleFav || new ArticleFav(article.getId(), userId)
      );
    } else {
      if (articleFav) {
        await this.port.deleteArticleFav(articleFav);
      }
    }
  }
}
