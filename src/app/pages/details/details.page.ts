import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ActivatedRoute } from '@angular/router';
import { FakeStoreResponse } from 'src/app/interfaces/StoreResponse';
import { HttpService } from '../../services/http.service';
import { ScarryInfoService } from 'src/app/services/scarry-info.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  stars: number=0;
  public products!: FakeStoreResponse;
  constructor(
    private readonly HttpService: HttpService,
    private readonly param: ActivatedRoute,
    private readonly Scarryinf:ScarryInfoService
  ) { }

  async ngOnInit() {
    this.param.params.subscribe(async(param) => {
      const url = environment.URL_Base + 'products/'+param['id'];
      this.products = await this.HttpService.get<FakeStoreResponse>(url);
      console.log(this.products);
      this.stars = (Math.floor(this.products.rating.rate));
    });

  }
  click(){

    this.Scarryinf.addItem({
      title: this.products.title,
      id: this.products.id,
      Image: this.products.image,
      price: this.products.price,
    });

  }

}
