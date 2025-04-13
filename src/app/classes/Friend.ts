class Friend {
  private _userId: string = '';
  private _friendId: string = '';

  get userId(): string {
    return this._userId;
  }

  set userId(value: string) {
    this._userId = value;
  }

  get friendId(): string {
    return this._friendId;
  }

  set friendId(value: string) {
    this._friendId = value;
  }
}

export default Friend;
