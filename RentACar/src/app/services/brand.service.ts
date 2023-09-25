import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../Models/brand';
import {HttpClient} from '@angular/common/http'
import { ListResponseModel } from '../Models/response/listResponseModel';



@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = 'https://localhost:7113/api/Brands/getall';

  constructor(private HttpClient : HttpClient) { }

   getBrands() : Observable<ListResponseModel<Brand>>{
    return this.HttpClient.get<ListResponseModel<Brand>>(this.apiUrl);
  }
}
