import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Roasted Beef', 100),
    new Ingredient('Chicken Slice', 200)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdd(ingredientData: Ingredient) {
    this,this.ingredients.push(ingredientData);
  }

}
