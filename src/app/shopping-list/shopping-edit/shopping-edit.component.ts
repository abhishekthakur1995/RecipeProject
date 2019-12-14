import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName', {static: false}) nameInput: ElementRef;
  @ViewChild('inputAmount', {static: false}) amountInput: ElementRef;
  // @Output() ingredientEdit = new EventEmitter<{name: string, amount: number}>();
  @Output() ingredientEdit = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const name = this.nameInput.nativeElement.value; 
    const amount = this.amountInput.nativeElement.value;
    const ingredientData = new Ingredient(name, amount)

    this.ingredientEdit.emit(ingredientData);
  }

}
