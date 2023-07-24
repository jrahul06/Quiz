import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  name : string = ''; 

  constructor(private router : Router) {}

  ngOninit() {
    initTE({ Ripple, Input });
  }

  onRegister( form : NgForm) {
    if (form.valid) {
      console.log(form);
      this.router.navigate(['category']);
    } else {
      alert('Fill all fields');
    }
  }
}
