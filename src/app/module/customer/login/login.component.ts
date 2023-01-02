import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, map } from 'rxjs';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userDetails: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    favQueAns: new FormControl(''),
    cPassword: new FormControl(''),
  });

  forgotPassword: boolean = false;
  customerData: any;
  loginAuth: boolean = false;
  forgotuserData: any = [];
  forgotAuthSuccess: boolean = false;
  changed: string = '';
  constructor(private customer: CustomerService, private router: Router) {}
  ngOnInit() {}
  changein() {
    location.reload();
  }

  loginUser() {
    this.customer.customerLogIn().subscribe(
      (res) => {
        this.customerData = res;
        this.userAuth(this.customerData);
      },
      (err) => console.log(err)
    );
  }
  userAuth(data: any) {
    //console.log(data);
    let arr = data.filter((x: any) => {
      if (
        x.userName == this.userDetails.value.userName &&
        x.password == this.userDetails.value.password
      ) {
        return x;
      }
    });
    if (arr.length != 0) {
      this.loginAuth = true;
      this.customer.loginUserData = arr;
      this.router.navigate(['/dashboard']);
    }
    console.log(arr);
  }
  forgotPasswordGetDetails() {
    this.customer
      .customerLogIn()
      // .pipe(
      //   finalize(() => {
      //     console.log('finalize');
      //   }),
      //   map((res) =>
      //     res.filter(
      //       (x: any) =>
      //         x?.userName == this.userDetails.value.userName &&
      //         x?.favQueAns === this.userDetails.value.favQueAns
      //     )
      //   )
      // )
      .subscribe(
        (res) => {
          console.log('subscribe', res);
          this.customerData = res;
          this.forgotuserData = res.filter(
            (x: any) =>
              x?.userName == this.userDetails.value.userName &&
              x?.favQueAns === this.userDetails.value.favQueAns
          );

          if (this.forgotuserData.length != 0) {
            this.forgotAuthSuccess = true;
          } else {
            this.changed = 'notchanged';
          }
          console.log('forgotuserdata', this.forgotuserData);
        },
        (err) => console.log(err)
      );
  }
  forgotPasswordMethod() {
    this.forgotPassword = !this.forgotPassword;
  }
  updatePassword() {
    if (this.userDetails.value.password === this.userDetails.value.cPassword) {
      this.customer
        .updatePassword(this.forgotuserData[0].id, {
          password: this.userDetails.value.password,
        })
        .subscribe(
          (x: any) => {
            console.log(x);
            this.changed = 'changed';
          },
          (err) => {
            console.log(err);
          }
        );
    } else {
      alert('please check ur password');
    }
  }
}
