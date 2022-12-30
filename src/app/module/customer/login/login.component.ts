import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userDetails = {
    userName: '',
    password: '',
  };
  forgotPassword: boolean = false;
  customerData: any;
  constructor(private customer: CustomerService) {}
  ngOnInit() {
    this.loginUser();
  }

  loginUser() {
    console.log(this.userDetails);
    this.customer.customerLogIn().subscribe(
      (res) => {
        this.customerData = res;
        this.userAuth(this.customerData);
      },
      (err) => console.log(err)
    );
  }
  userAuth(data: any) {
    data.filter();
  }

  forgotPasswordMethod() {
    this.forgotPassword = !this.forgotPassword;
  }
}
