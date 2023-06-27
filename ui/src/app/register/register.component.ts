import { Component } from '@angular/core';
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
 ngOninit() {
  initTE({ Ripple, Input });
 }
}
