import { Component } from '@angular/core';
import { Meal } from './meal.model'

@Component({
   selector: 'app-root',
   template: `
   <meal-list [childMealList]='masterMealList' (newSelectionSender)='toggleSelection($event)'></meal-list>
   <new-meal (newMealSender)='addMeal($event)'></new-meal>
   <edit-meal [childEditMeal]='selectedEditMeal' (newEditSender)='toggleSelection($event)'></edit-meal>
   `
})

export class AppComponent {
  masterMealList: Meal[] = [new Meal("Hamburger", "Didn't get a soda or cheese on my burger", 354), new Meal("Fries", "I only ate half of them.", 365), new Meal("chocolate cake", "Did not eat all the chocolates and cream", 300)];
  selectedEditMeal: Meal = null;

  addMeal(newMeal: Meal){
    this.masterMealList.push(newMeal);
  }

  toggleSelection(selectedMeal: Meal){
    if (selectedMeal){
      this.selectedEditMeal = selectedMeal;
    }else{
      this.selectedEditMeal = null;
    }
  }

}
