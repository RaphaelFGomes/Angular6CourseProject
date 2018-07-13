import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @Output() ingredients: Ingredient[] = [];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  onIngredientDeleted(ingredient: Ingredient) {
    this.ingredients.forEach( (item, index) => {
      if(item === ingredient) this.ingredients.splice(index,1);
    });
  }

}
