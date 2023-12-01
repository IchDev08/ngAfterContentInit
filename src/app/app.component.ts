import {Component} from '@angular/core';
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
export class AppComponent {
  title = 'ngOnContentInit';

  foods = ['bánh mình', 'trứng gà', 'gạo', 'nước ép']
}
