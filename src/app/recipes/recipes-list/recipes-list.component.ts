import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://s1.cdn.autoevolution.com/images/news/gallery/ferrari-hybrid-supercar-confirmed-by-ceo-slots-above-812-superfast_1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
