import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <header>
      <h2>Today's Food Log</h2>
      <ul class="nav nav-tabs" >
        <li role="presentation" (click)="setFilter('allMeals')" ><a href="#">All Meals</a></li>
        <li role="presentation" (click)="setFilter('lowerCalories')" ><a href="#">Low Cals</a></li>
        <li role="presentation" (click)="setFilter('higherCalories')" ><a href="#">High Cals</a></li>
      </ul>
    </header>
    <ul class="list-unstyled">
      <li *ngFor = 'let meal of childMealList|calories: caloriesFilter'>
      <h1 class="bg">{{meal.name}}, <span [class]='changeColor(meal.calories)'>{{meal.calories}}</span> Cals</h1>
      <h4>{{meal.time}}</h4>
      <h4>{{meal.details}}</h4>
      <button (click) = 'selectMeal(meal)' class='btn btn-info btn-sm'>Update</button>
      <hr>
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

  changeColor(number: number){
    if (number >= 500){
      return "warning";
    }
  }

}
