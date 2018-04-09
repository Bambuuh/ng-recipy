import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppingList.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') form: NgForm;

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoppingListService.getIngredient(this.editedItemIndex)

      this.form.setValue({
        'name': this.editedItem.name,
        'amount': this.editedItem.amount
      })
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onSubmit() {
    if (this.editMode) {
      this.updateIngredient();
    } else {
      this.addIngredient();
    }
    this.onClear()
  }

  updateIngredient() {
    const { name, amount } = this.form.value;
    const updatedIngredient = { name, amount }
    this.shoppingListService.updateIngredient(this.editedItemIndex, updatedIngredient)
  }

  addIngredient() {
    const { name, amount } = this.form.value
    const newIngredient = new Ingredient(name, amount)
    this.shoppingListService.addIngredient(newIngredient)
  }

  onDelete() {
    this.shoppingListService.removeIngredient(this.editedItemIndex);
    this.onClear()
  }

  onClear() {
    this.form.reset();
    this.editMode = false;
  }
}
