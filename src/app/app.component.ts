import {Component, ContentChildren, QueryList, AfterContentInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FoodsComponent} from "./foods/foods.component";
import {FoodComponent} from "./food/food.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FoodsComponent, FoodComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterContentInit {
  title = 'ngOnContentInit';

  @ContentChildren(FoodComponent) foodChildren!: QueryList<FoodComponent>

  foods = ['bánh mình', 'trứng gà', 'gạo', 'nước ép']

  ngAfterContentInit() {
    console.log(this.foodChildren)
  }


}
