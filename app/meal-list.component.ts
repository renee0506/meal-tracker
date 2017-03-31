import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <ul class="nav nav-tabs" >
    <li role="presentation" (click)="setFilter('allMeals')" ><a href="#">All Meals</a></li>
    <li role="presentation" (click)="setFilter('lowerCalories')" ><a href="#">Low Cals</a></li>
    <li role="presentation" (click)="setFilter('higherCalories')" ><a href="#">High Cals</a></li>
  </ul>
  <ul>
    <li *ngFor = 'let meal of childMealList|calories: caloriesFilter'>
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
  caloriesFilter: string = 'allMeals';

  selectMeal(mealToEdit: Meal){
    this.newSelectionSender.emit(mealToEdit);
  }

  setFilter(filter: string){
    this.caloriesFilter = filter;
  }
}
