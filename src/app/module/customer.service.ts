import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customerUrl = 'http://localhost:3000/customer';
  constructor(private http: HttpClient) {}
  UserName = 'Harish';
  password = '123456789';
  customerLogIn() {
    return this.http.get<any>(this.customerUrl);
  }
}
