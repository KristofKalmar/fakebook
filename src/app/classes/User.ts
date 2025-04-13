class User {
  private _id: string = '';
  private _email: string = '';
  private _fullName: string = '';
  private _password: string = '';
  private _image: string = '';
  private _bannerImage: string = '';

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get fullName(): string {
    return this._fullName;
  }

  set fullName(value: string) {
    this._fullName = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get bannerImage(): string {
    return this._bannerImage;
  }

  set bannerImage(value: string) {
    this._bannerImage = value;
  }
}

export default User;
