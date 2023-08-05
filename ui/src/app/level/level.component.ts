import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
export interface Category {
  id:          number;
  label:       string;
  description: string;
  image:       string;
}

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent {
  categories: Category[] = [];

  constructor(private router : Router, private api : ApiService) {}

  ngOnInit(){
    this.api.get<any>('assets/pages/category.json').subscribe((resp) => {
      this.categories = resp.categories;
      console.log('response',this.categories);
    })
  }

  onSelectCategory( category : Category ) {
    console.log('Category',category)
    this.router.navigate(['/quiz']);
  }


}
