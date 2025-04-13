class Reaction {
  private _isLike: boolean = false;
  private _postId: string = '';
  private _userId: string = '';

  get isLike(): boolean {
    return this._isLike;
  }

  set isLike(value: boolean) {
    this._isLike = value;
  }

  get postId(): string {
    return this._postId;
  }

  set postId(value: string) {
    this._postId = value;
  }

  get userId(): string {
    return this._userId;
  }

  set userId(value: string) {
    this._userId = value;
  }
}

export default Reaction;
