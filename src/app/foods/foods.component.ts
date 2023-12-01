import {Component, ContentChild, AfterContentInit, ContentChildren, QueryList} from '@angular/core';
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

  @ContentChildren(FoodComponent) foodChildren!: QueryList<FoodComponent>

  ngAfterContentInit() {
    this.foodCmp.food = this.foodCmp.food + ' today'

    this.foodChildren.map((item) => {
      if (item.food == 'gạo today') {
        console.log(item)
      }
    })
  }

}
