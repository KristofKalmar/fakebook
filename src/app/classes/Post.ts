class Post {
  private _id: string = '';
  private _userId: string = '';
  private _date: Date = new Date();
  private _body: string = '';
  private _attachment: string = '';

  get userId(): string {
    return this._userId;
  }

  set userId(value: string) {
    this._userId = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get body(): string {
    return this._body;
  }

  set body(value: string) {
    this._body = value;
  }

  get attachment(): string {
    return this._attachment;
  }

  set attachment(value: string) {
    this._attachment = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
}

export default Post;
