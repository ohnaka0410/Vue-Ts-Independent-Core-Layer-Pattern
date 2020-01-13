/**
 * 記事クラス
 */
export default class Article {
  /** 記事ID */
  private id: number;

  /**
   * コンストラクタ
   */
  public constructor(id:number) {
    this.id = id;
  }

  /**
   * ID取得処理
   */
  public getId() {
    return this.id;
  }
}
