import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../customer.service';

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css'],
})
export class CustomerdashboardComponent {
  userData: any | undefined;
  disableCheckbox: boolean = true;
  constructor(private customer: CustomerService) {
    this.userData = customer.loginUserData;
    console.log(this.userData);
  }
}
