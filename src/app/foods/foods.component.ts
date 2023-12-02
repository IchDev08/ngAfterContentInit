import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  QueryList
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FoodComponent} from "../food/food.component";

@Component({
  selector: 'app-foods',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './foods.component.html',
  styleUrl: './foods.component.css'
})
export class FoodsComponent implements AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  ngo = 'huy ich'

  @ContentChild(FoodComponent) foodCmp!: FoodComponent

  @ContentChildren(FoodComponent) foodChildren!: QueryList<FoodComponent>

  ngAfterContentInit() {
    this.foodCmp.food = this.foodCmp.food + ' today'

    this.foodChildren.map((item) => {
      if (item.food == 'gạo today') {
        item.food = 'gạo thay đổi today'
      }
    })
  }

  ngAfterContentChecked() {
    // console.log('s')
  }

  ngAfterViewInit() {
    this.ngo = 'ihc'
  }

  ngAfterViewChecked() {

  }

}
