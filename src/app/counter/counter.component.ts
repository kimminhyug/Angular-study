import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Counter } from '../counter/counter';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
/**
 * 입력, 출력 데코레이션을 지정하지 않을시 에러 발생
 */
  @Input() counter: Counter = {
    name:"첫번쨰",
    count:0
  };
  @Output() counterChange = new EventEmitter<Counter>();
  
  onIncrease(): void {
    console.log(this);
    this.counter.count = this.counter.count * 1;
    this.counter.count += 1 ;
    this.counterChange.emit(this.counter);
  };
  onDecrease(): void {
    this.counter.count = this.counter.count * 1;
    this.counter.count -= 1 ;
    this.counterChange.emit(this.counter);
  };
  

  constructor() { }

  ngOnInit(): void {
    
  }

}
