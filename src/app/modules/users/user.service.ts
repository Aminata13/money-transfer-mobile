import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'https://localhost:8000/api/super_admin/';
  private routePrefix: string = 'users';

  constructor(private http: HttpClient) { }

  findOneByPhoneNumber(phoneNumber: string) {
    return this.http.get(this.getRoutePrefixWithSlash() + phoneNumber + '/check');
  }

  remove(id: number) {
    return this.http.delete(this.getRoutePrefixWithSlash() + id);
  }

  private getRoutePrefixWithSlash(): string {
    return this.url + this.routePrefix + '/';
  }
}
