import { Component } from '@angular/core';
import { Meal } from './meal.model'

@Component({
   selector: 'app-root',
   template: `
   <div class="row">
    <div class="col-md-6">
    <div *ngIf="!selectedEditMeal">
      <meal-list [childMealList]='masterMealList' (newSelectionSender)='toggleSelection($event)'></meal-list>
    </div>
    <edit-meal [childEditMeal]='selectedEditMeal' (newEditSender)='toggleSelection($event)'></edit-meal>
    </div>
    <div class="col-md-6">
      <div class="jumbotron">
      <h1>Today's Total:<br> {{getSumCalories()}} calories</h1>
      </div>
      <new-meal (newMealSender)='addMeal($event)'></new-meal>
    </div>
   </div>
   `
})

export class AppComponent {
  masterMealList: Meal[] = [new Meal("Hamburger", "Didn't get a soda or cheese on my burger", 354, "17:24 PM"), new Meal("Fries", "I only ate half of them.", 324, "12:39 PM"), new Meal("Chocolate cake", "Did not eat all the chocolates and cream", 539, "20:30 PM")];
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

  getSumCalories(){
    var sum: number = 0;
    for(var meal of this.masterMealList){
      sum += meal.calories;
    }
    return sum
  }



}
