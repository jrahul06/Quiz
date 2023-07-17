import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  Ripple,
  Input,
  initTE,
} from "tw-elements";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  emailId : string = ''; 

  constructor(private router : Router) {}

  ngOninit() {
    initTE({ Ripple, Input });
  }

  onRegister() {
    if (this.emailId) {
      this.router.navigate(['category']);
    } else {
      alert('error');
    }
  }
}
