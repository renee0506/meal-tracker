import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
  <div *ngIf='childEditMeal'>
    <h1>{{childEditMeal.name}}, {{childEditMeal.calories}}</h1>
    <h4>{{childEditMeal.details}}</h4>
    <h2>Edit this meal</h2>
    <div class="form-group">
     <input [(ngModel)]='childEditMeal.name' placeholder = "Name" class="form-control">
    </div>
    <div class="form-group">
     <input [(ngModel)]='childEditMeal.details' placeholder = "Details" class="form-control">
    </div>
    <div class="form-group">
     <input [(ngModel)]='childEditMeal.calories' placeholder = "Calories" type="number" class="form-control">
    </div>
    <button (click)="finishEdit()"class="btn btn-info">Finish</button>
  </div>
  `
})

export class EditMealComponent {
  @Input() childEditMeal: Meal;
  @Output() newEditSender = new EventEmitter();

  finishEdit(){
    this.newEditSender.emit();
  }
}
