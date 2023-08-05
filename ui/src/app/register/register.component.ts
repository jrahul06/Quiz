import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {
  Ripple,
  Input,
  initTE,
} from "tw-elements";
import { map } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  emailId : string = ''; 
  name : string = ''; 

  constructor(private router : Router, private http : HttpClient, private toast : HotToastService) {}

  ngOninit() {
    initTE({ Ripple, Input });
  }

  onRegister( form : NgForm) {
    if (form.valid) {
      console.log(form);
      this.http.get(`https://test-crud-adf88-default-rtdb.firebaseio.com/user.json`).pipe(map(resp => {
        const array = [];
        for (const [key, value] of Object.entries(resp)) {
          const item = {
            id : key,
            name : value.name,
            emailId : value.emailId,
          }
          array.push(item);
        }
        return array;
      })).subscribe(users => {
          if(users.find((element) => element.emailId == form.value.emailId)) {
            this.toast.warning('Already registered!');
            this.router.navigate(['/category']);
          }else{
            this.http.post(`https://test-crud-adf88-default-rtdb.firebaseio.com/user.json`,form.value).subscribe(resp => {
              console.log('saved form details from users',resp);
              this.toast.success('Successfully registered!');
              this.router.navigate(['/category']);
            });
          }
      })
    } else {
      this.toast.error('Fill all fields!');
    }
  }
}
