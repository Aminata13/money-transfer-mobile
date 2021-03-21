import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deposit } from './deposit.model';

@Injectable({
  providedIn: 'root'
})
export class DepositService {
  url = 'https://localhost:8000/api/agent/on_going_transactions';

  constructor(private http: HttpClient) { }

  create(deposit: Deposit) {
    return this.http.post(this.url, deposit);
  }
}
