import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { FakeStoreResponse } from '../interfaces/StoreResponse';
import { environment } from 'src/environments/environment.prod';
import { AlertController, NavController } from '@ionic/angular';
import { ScarryInfoService } from '../services/scarry-info.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit{
  cart = [];

  constructor(private readonly HttpSrvc:HttpService,
     private readonly CarryS:ScarryInfoService,
      private readonly navC:NavController,
      private readonly alrtctr:AlertController,
      private readonly Carryinfo:ScarryInfoService
    ) { }

  public products : FakeStoreResponse[]=[];
  public i2i : any[]=this.CarryS.allcarry();
  public Tpay : number=0;

 async ngOnInit() {

  this.products = this.CarryS.getAllItems();
  this.Tpay = this.Carryinfo.getTotal();

  const url = environment.URL_Base + 'products/' + this.i2i;
  this.products = await this.HttpSrvc.get<FakeStoreResponse[]>(url);
  console.log(this.i2i);

  }
  public click(id:number){
    console.log(id);
    this.navC.navigateForward('details/'+id)


  }
  delcarry(id: number) {
    this.CarryS.delItem(id);
    this.products = this.CarryS.getAllItems();
  }

  pay(){
    this.Tpay = this.CarryS.getTotal();
    console.log(this.Tpay);
    

  }



}

