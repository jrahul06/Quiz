import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
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

  constructor(private router : Router, private http : HttpClient) {}

  ngOninit() {
    initTE({ Ripple, Input });
  }

  onRegister( form : NgForm) {
    if (form.valid) {
      console.log(form);
      // this.router.navigate(['category']);
      this.http.post(`https://test-crud-adf88-default-rtdb.firebaseio.com/user.json`,form.value).subscribe(resp => {
        console.log('saved form details',resp);
        this.http.get(`https://test-crud-adf88-default-rtdb.firebaseio.com/user.json`).subscribe(resp => {
          console.log('all details',resp);
        })
      });

      
    } else {
      alert('Fill all fields');
    }
  }
}
