import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  // //! using ViewChild method to get local references (Not used)
  // @ViewChild('nameInput',{static:true}) ingredient: ElementRef;
  // @ViewChild('amountInput',{static:true}) amount: ElementRef;

  // @Output()
  // addStuff = new EventEmitter<Ingredient>()

  constructor(private shoppingSvc: ShoppingListService){}

  addItem(ingredient: HTMLInputElement, amount: HTMLInputElement){    
    this.shoppingSvc.addToList(new Ingredient(ingredient.value,parseInt(amount.value)));
    // this.addStuff.emit(new Ingredient(ingredient.value,parseInt(amount.value)))
  }

  //! using ViewChild method (Not used)
  // addItemWithViewChild(){    
  //   this.addStuff.emit(new Ingredient(this.ingredient.nativeElement.value,parseInt(this.amount.nativeElement.value)))  }

}
