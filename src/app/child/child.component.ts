import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
childName: string;
  @Output()
  getItem = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  sendItem(item: number) {
    this.getItem.emit(item);
  }

}
