import {Component, Output, EventEmitter} from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <div>
    <h2>Add a new meal</h2>
    <div class="form-group">
     <input #newName placeholder = "Name" class="form-control">
    </div>
    <div class="form-group">
     <input #newDetails placeholder = "Details" class="form-control">
    </div>
    <div class="form-group">
     <input #newCalories placeholder = "Calories" type="number" class="form-control">
    </div>
    <button (click)="finishAddNewMeal(newName.value, newDetails.value, newCalories.value); newName.value = ''; newDetails.value = ''; newCalories.value = '';" class="btn btn-info">Add</button>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  finishAddNewMeal(name: string, details: string, calories: number){
    var newMealToAdd = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }

}
