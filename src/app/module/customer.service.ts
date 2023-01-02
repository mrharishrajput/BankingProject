import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customerUrl = 'http://localhost:3000/customer';
  loginUserData: any;
  constructor(private http: HttpClient) {}

  customerLogIn() {
    return this.http.get<any>(this.customerUrl);
  }
  updatePassword(id: string, body: any) {
    return this.http.patch<any>(this.customerUrl + `/${id}`, body);
  }
}
