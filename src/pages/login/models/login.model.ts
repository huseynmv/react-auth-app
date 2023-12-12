export interface User {
  email: string;
  id: string;
}
export default class LoginModel {
  public id: number | null = null;
  public user: User | null = null;

  constructor(item: any) {
    this._setId(item);
    this._setUser(item);
  }

  /**
   * set id
   * @param id
   * @private
   */
  private _setId({ id }: any) {
    this.id = id;
  }

  /**
   * set body
   * @param body
   * @private
   */
  _setUser({ user }: any) {
    this.user = user;
  }
}
