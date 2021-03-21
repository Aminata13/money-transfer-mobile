export class Deposit {
  constructor(
    public amount?: number,
    public depositClient?: {firstname: string, lastname: string, phoneNumber: string, nin: string},
    public withdrawalClient?: {firstname: string, lastname: string, phoneNumber: string}
  ) {  }
}
