export class User {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public firstname: string,
    public lastname: string,
    public email: string,
    public address: string,
    public deleted: boolean,
    public phoneNumber: string,
    public nin: string,
    public role: {id: number, name: string},
    public avatar?: any
  ) {  }
}
