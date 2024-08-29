import { Component, Input} from '@angular/core';
import { FakeStoreResponse } from 'src/app/interfaces/StoreResponse';
import { ScarryInfoService } from 'src/app/services/scarry-info.service';

@Component({
  selector: 'app-carry',
  templateUrl: './carry.component.html',
  styleUrls: ['./carry.component.scss'],
})
export class CarryComponent  {

  @Input() receiveinter : any;

  public products!: FakeStoreResponse;
  public CarryItem : any[]=[];

  constructor(private readonly carrS:ScarryInfoService) { }

  getid(id:number){
    this.carrS.delItem(id);
  }
  DelItem(id:number){
    this.carrS.delItem(id);
  }

}
