import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeeService {
  url = 'https://localhost:8000/api/agent/';
  private routePrefix: string = 'fees';

  constructor(private http: HttpClient) { }

  getFees(amount: number) {
    return this.http.get(this.getRoutePrefixWithSlash() + amount);
  }

  private getRoutePrefixWithSlash(): string {
    return this.url + this.routePrefix + '/';
  }
}
