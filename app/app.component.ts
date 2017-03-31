import { Component } from '@angular/core';
import { Meal } from './meal.model'

@Component({
   selector: 'app-root',
   template: `
   <h1>{{testMeal.name}}<h1>
   <h4>{{testMeal.details}}</h4>
   <h4>{{testMeal.calories}}</h4>
   `
})

export class AppComponent {
  testMeal: Meal = new Meal("Hamburger", "Didn't get a soda or cheese on my burger", 354);
}
