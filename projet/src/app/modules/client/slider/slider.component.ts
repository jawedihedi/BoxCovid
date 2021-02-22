import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  images = ['../../../../assets/client/images/doc1.jpg', '../../../../assets/client/images/doc2.jpg', '../../../../assets/client/images/doc3.jpg','../../../../assets/client/images/banner_1.jpg'];
  constructor() { }

  ngOnInit(): void {
  }

}
