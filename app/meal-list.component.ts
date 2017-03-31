import {Component, Input} from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <ul>
    <li *ngFor = 'let meal of childMealList'>{{meal.name}}</li>
  </ul>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
}
