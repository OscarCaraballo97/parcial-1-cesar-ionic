import { HttpService } from './../services/http.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { FakeStoreResponse, Category } from '../interfaces/StoreResponse';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public products : FakeStoreResponse[]=[];
  public Category !: Category;
  url = environment.URL_Base + "products";


  constructor(private readonly HttpSrvc: HttpService, private readonly navcr: NavController) { }

 async ngOnInit() {

  this.products = await this.HttpSrvc.get<FakeStoreResponse[]>(this.url);
  console.log(this.products);
  this.Category = await this.HttpSrvc.get<Category>(this.url+'/Categories')

}
async doclick(event: any)
{
    this.products = await this.HttpSrvc.get<FakeStoreResponse[]>(this.url+'/Categories/'+event.detail.value);
}
public doNavegate(id: number) {
  console.log(id);
  this.navcr.navigateForward("details/"+id);
}
async OptionSelection(event: any) {
  this.products = await this.HttpSrvc.get<FakeStoreResponse[]>(this.url + '/category/' + event.detail.value)
}
}
