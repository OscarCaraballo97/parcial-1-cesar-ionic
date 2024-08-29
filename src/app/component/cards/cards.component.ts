
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit  {

  @Input() productsL: any;
  @Output() doClick = new EventEmitter();
  @Input() id: number=0;
  stars: number=0;

  constructor() { }

  click(id: number){
    this.doClick.emit(id);
  }

  ngOnInit(){
    this.stars = (Math.floor(this.productsL.rating.rate));
  }
}
