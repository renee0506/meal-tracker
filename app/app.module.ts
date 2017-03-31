import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MealListComponent} from './meal-list.component';
import {NewMealComponent} from './new-meal.component';
import {EditMealComponent} from './edit-meal.component';
import {FormsModule} from '@angular/forms';

@NgModule ({
  imports: [ BrowserModule , FormsModule],
  declarations: [ AppComponent, MealListComponent, NewMealComponent, EditMealComponent],
  bootstrap: [ AppComponent ]
})

export class AppModule {

}
