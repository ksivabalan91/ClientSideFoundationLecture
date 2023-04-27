import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('Cajun chicken','It is spicy as fk. Not for the faint of heart','https://rasamalaysia.com/wp-content/uploads/2018/09/cajun-chicken-thumb.jpg'),
    new Recipe('cajun chicken','spicy as fk','https://rasamalaysia.com/wp-content/uploads/2018/09/cajun-chicken-thumb.jpg')
  ];

  ngOnInit(){
  }

  constructor(){}


}
