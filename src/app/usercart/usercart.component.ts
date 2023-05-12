import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-usercart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit{
 
  usercart:any;
  total:any;
  price:any;
constructor(private service : ProductService,private router :Router){
  this.total =0;
}


  ngOnInit(): void {
   this.showCart();
    
  }

  

  showCart(){
    this.service.displayCart(this.service.getUser().userId).subscribe((data:any)=>{
      this.usercart = data;
      this.total = 0;
      this.usercart.forEach((val:any)=>{
        this.total+=(val.productPrice*val.productQuantity);
      });

      // this.total=this.total.toFixed(2);

      this.service.setAmount(this.total);
    });
    
  }



  delete(c:any){
    
    this.service.removeCart(c.cartId).subscribe((data:any)=>{
      this.ngOnInit();
    });

  }

  update(c:any){
    this.service.updateCart(c).subscribe((data:any)=>{
      this.ngOnInit();
    });
  }

  pay(){

    this.router.navigate(['pay']);

  }
  
  refreshPage(){
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
      this.router.navigate([currentUrl]);
    });
  }
}
