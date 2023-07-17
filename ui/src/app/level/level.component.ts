import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent {

  constructor(private router : Router) {}

  onSelectCategory( category : number ) {
    this.router.navigate(['/quiz']);
  }
}
