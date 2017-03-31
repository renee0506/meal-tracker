import {Component, Output, EventEmitter} from '@angular/core';
import {Meal} from './meal.model';
declare var moment: any;


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
    <input #newTime type="hidden">
    <button (click)="finishAddNewMeal(newName.value, newDetails.value, newCalories.value); newName.value = ''; newDetails.value = ''; newCalories.value = '';" class="btn btn-info">Add</button>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  finishAddNewMeal(name: string, details: string, calories: string){
    var time = moment().format('hh:mm a');
    var newMealToAdd = new Meal(name, details, parseInt(calories), time);
    this.newMealSender.emit(newMealToAdd);
  }

}
