import { Injectable } from '@angular/core';
import { FakeStoreResponse } from '../interfaces/StoreResponse';

@Injectable({
  providedIn: 'root'
})
export class ScarryInfoService {

  private infoCarry: FakeStoreResponse[]=[];




  constructor() { }

  allcarry ():any[] {

    return this.infoCarry;

  }

  addItem(ddItem:any){

    this.infoCarry.push(ddItem);

  }
  delItem(delet:number){
    const index = this.infoCarry.findIndex((item) => item.id===delet);
    if (index !== -1) {
      this.infoCarry.splice(index, 1);
      }
  }

  clearcarry(){
    this.infoCarry = [];
  }
  getAllItems(): FakeStoreResponse[] {
    return this.allcarry();
  }
  getTotal(){
    return this.infoCarry.length;

  }

}
