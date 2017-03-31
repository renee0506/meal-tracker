import { Component } from '@angular/core';
import { Meal } from './meal.model'

@Component({
   selector: 'app-root',
   template: `
   <meal-list [childMealList]='masterMealList'></meal-list>
   `
})

export class AppComponent {
  masterMealList: Meal[] = [new Meal("Hamburger", "Didn't get a soda or cheese on my burger", 354), new Meal("Fries", "I only ate half of them.", 365), new Meal("chocolate cake", "Did not eat all the chocolates and cream", 300)];

}
