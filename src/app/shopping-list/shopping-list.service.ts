import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
ingredientsChanged = new EventEmitter<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addingredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    deleteIngredient(ingredient: Ingredient) {
        this.ingredients.forEach( (item, index) => {
          if(item === ingredient) this.ingredients.splice(index,1);
        });
      }

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }
    
}