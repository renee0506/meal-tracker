import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <ul>
    <li *ngFor = 'let meal of childMealList'>
    <h1>{{meal.name}}, {{meal.calories}}</h1>
    <h2>{{meal.details}}</h2>
    <button (click) = 'selectMeal(meal)' class='btn btn-info'>Update</button>
    </li>
  </ul>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() newSelectionSender = new EventEmitter();

  selectMeal(mealToEdit: Meal){
    this.newSelectionSender.emit(mealToEdit);
  }
}
