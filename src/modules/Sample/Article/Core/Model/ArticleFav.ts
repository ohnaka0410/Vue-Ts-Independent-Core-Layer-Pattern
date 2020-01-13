/**
 * 記事お気に入りクラス
 */
export default class ArticleFav {
  /** 記事ID */
  private articleId: number;
  /** ユーザID */
  private userId: number;
  /** 記事お気に入りID */
  private id: number | undefined;

  /**
   * コンストラクタ
   */
  public constructor(articleId:number, userId:number, id?:number) {
    this.articleId = articleId;
    this.userId = userId;
    this.id = id;
  }

  /**
   * 記事ID取得処理
   */
  public getArticleId(): number {
    return this.articleId;
  }

  /**
   * ユーザID取得処理
   */
  public getUserId(): number {
    return this.userId;
  }

  /**
   * 記事お気に入りID取得処理
   */
  public getId(): number | undefined {
    return this.id;
  }
}
