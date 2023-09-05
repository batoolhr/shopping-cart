import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-productsdetails',
  templateUrl: './productsdetails.component.html',
  styleUrls: ['./productsdetails.component.css']
})
export class ProductsdetailsComponent  implements OnInit{
  id:any;
  data:any=[]
  loading:boolean=false
constructor(private route:ActivatedRoute ,private service:ProductsService){
  this.id=this.route.snapshot.paramMap.get('id');
  
}
  ngOnInit(): void {
    this.getProduct();
  }
getProduct(){
  this.loading=true
  this.service.getproductbyID(this.id).subscribe((res:any)=>{
    this.data=res;
    this.loading=false;
  });
}
}

// private service:ProductsService
