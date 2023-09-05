
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http:HttpClient) { }
  getAllProduct(){
    return this.http.get('https://fakestoreapi.com/'+'products');
  }
  getAllCatigories(){
    return this.http.get('https://fakestoreapi.com/'+'products/categories');
  }
  getproductbyCatigories(keyword:string){
    return this.http.get('https://fakestoreapi.com/'+'products/category/'+keyword);
   }

   getproductbyID(ID:string){
    return this.http.get('https://fakestoreapi.com/'+'products/'+ID);
   }



}
// https://fakestoreapi.com/products/category/jewelery


// fetch('https://fakestoreapi.com/products')
// .then(res=>res.json())
// .then(json=>console.log(json))
