import { Component, OnInit } from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
products: Product[] = [
  {
    img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    name : 'nameNo1'
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    name : 'nameNo2'
  },
  {
    img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    name : 'nameNo3'
  },
  {
    img: 'https://static.remove.bg/remove-bg-web/417fd4161b5795da2323e66af38c4afd2f7ee3ae/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png',
    name: 'nameNo4'
  },
  {
    img: 'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg',
    name : 'NameNo5'
  }
];

  constructor() { }

  ngOnInit() {
  }

}
