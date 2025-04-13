class Comment {
  private _userId: string = '';
  private _commentId: string = '';
  private _text: string = '';

  get userId(): string {
    return this._userId;
  }

  set userId(value: string) {
    this._userId = value;
  }

  get commentId(): string {
    return this._commentId;
  }

  set commentId(value: string) {
    this._commentId = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }
}

export default Comment;
