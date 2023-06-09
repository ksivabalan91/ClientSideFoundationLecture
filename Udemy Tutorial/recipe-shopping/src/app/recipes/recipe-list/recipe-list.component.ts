import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = []
  
  constructor(private recipeSvc: RecipeService){}

  // @Output()
  // recipeWasSelected = new EventEmitter<Recipe>();

  ngOnInit(){
    this.recipes=this.recipeSvc.getRecipes();
  }
}
