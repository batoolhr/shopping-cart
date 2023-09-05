import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products:any[]=[]
  catogeries:any[]=[]
  loading:boolean=false;
  cartProduct:any[]=[]
  constructor(private sevice:ProductsService){

  }
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
  getProducts(){
    this.loading=true;
    this.sevice.getAllProduct().subscribe((res:any)=>{
    this.products=res
    this.loading=false

    },error=>{
      alert("ERROR")
    })
  }

  getCategories(){
    this.loading=true
    this.sevice.getAllCatigories().subscribe((result:any)=>{
    this.catogeries=result
    this.loading=false
    },error=>{
      alert("ERROR")
    })
  }
  hadnlefilterCategories(event:any){
    let value=event.target.value;

    (value=='all') ? this.getProducts() : this.getproductcat(value)

  }
  getproductcat(keyword:string){
    this.loading=true
    this.sevice.getproductbyCatigories(keyword).subscribe((res:any)=>{
      this.products=res;
      this.loading=false
    })
  }

  addToCart(event:any){
    if('cart' in localStorage){
      this.cartProduct=JSON.parse(localStorage.getItem('cart') !)
      let exist=this.cartProduct.find(item=>item.id==event.id)
      if(exist){
        alert('Product already exsit ')
      }else{
        this.cartProduct.push(event);

        localStorage.setItem('cart',JSON.stringify(this.cartProduct));
      }
      // this.cartProduct.push(event);
      // console.log("AFTER",this.cartProduct)
      // localStorage.setItem('cart',JSON.stringify(this.cartProduct));
    }
    else{
      this.cartProduct.push(event);
      localStorage.setItem('cart',JSON.stringify(this.cartProduct));
    }
   
  }
}
