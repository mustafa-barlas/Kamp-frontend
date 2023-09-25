import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Car } from '../Models/car';
import { ListResponseModel } from '../Models/response/listResponseModel';



@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:7113/api/';

  constructor(private HttpClient : HttpClient) { }

   getCars() : Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getall"
    return this.HttpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByBrand(brandId : number) : Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + "cars/getbybrand?brandId="+brandId
    return this.HttpClient.get<ListResponseModel<Car>>(newPath);
  }
}
