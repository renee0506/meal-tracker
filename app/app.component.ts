import { Component } from '@angular/core';
import { Meal } from './meal.model'

@Component({
   selector: 'app-root',
   template: `
   <div class="row">
     <div class="col-md-6" id="left">
       <div *ngIf="!selectedEditMeal">
       <meal-list [childMealList]='masterMealList' (newSelectionSender)='toggleSelection($event)'></meal-list>
       </div>
       <edit-meal [childEditMeal]='selectedEditMeal' (newEditSender)='toggleSelection($event)'></edit-meal>
     </div>
     <div class="col-md-6">
       <div class="jumbotron">
        <h2>Today's Consumption</h2>
         <div class="progress">
           <div [class]="changeColor()" role="progressbar" [attr.aria-valuenow]="getSumCalories()" aria-valuemin="0" aria-valuemax="2500" style="width: 60%;">
           {{getSumCalories()}} Calories
           </div>
         </div>
         <div id="labels">
         <p>0<span id="label">2500</span></p>
         </div>
         <h3>{{getAlert()}}</h3>
       </div>
       <new-meal (newMealSender)='addMeal($event)'></new-meal>
     </div>
   </div>
   `
})

export class AppComponent {
  masterMealList: Meal[] = [new Meal("Hamburger", "Didn't get a soda or cheese on my burger", 354, "05:24 PM"), new Meal("Fries", "I only ate half of them.", 324, "12:39 PM"), new Meal("Chocolate cake", "Did not eat all the chocolates and cream", 539, "08:30 PM")];
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

  changeColor(){
    if(this.getSumCalories()<=1500){
      return "progress-bar progress-bar-success";
    }else if(this.getSumCalories()<=2000){
      return "progress-bar progress-bar-warning";
    }else {
      return "progress-bar progress-bar-danger";
    }
  }

  getAlert(){
    if(this.getSumCalories()<=1500){
      return "Keep up with the good work!";
    }else if(this.getSumCalories()<=2000){
      return "Be careful with what you eat!";
    }else {
      return "Exercise and Veggie!";
    }
  }

}
