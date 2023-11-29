import {Component, ContentChild, AfterContentInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FoodComponent} from "../food/food.component";

@Component({
  selector: 'app-foods',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.css'
})
export class FoodsComponent implements AfterContentInit {

  @ContentChild(FoodComponent) foodCmp!: FoodComponent

  ngAfterContentInit() {
    this.foodCmp.food = this.foodCmp.food + ' today'
  }

}
