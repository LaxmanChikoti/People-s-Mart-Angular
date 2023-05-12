import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  productList: any;
  cartCount: number = 0;
  cart: any;
  thisUser: any;
  constructor(private router:Router,private service:ProductService){}
  ngOnInit(): void {
    
  }

//   ngOnInit(): void {
//     this.service.getAllProducts().subscribe((data:any)=>{
//     this.productList = data;
//     });
//     this.service.displayCart(this.service.getUser().userId).subscribe((data:any)=>{
//       this.cart = data;
//     });
//     this.service.cartCount(this.service.getUser().userId).subscribe((data:any)=>{
//      this.cartCount = data;
//     });
//     this.thisUser = this.service.getUser().userName;

//   }

//   addToCart(item :any){
// let i = 0;
// for(; i < this.cart.length; i++){
//   if(this.cart[i].productId == item.productId){

//     let text = "product already exits! \n Do You Want To Add this?";
//     if(confirm(text) == true){
//       this.cart[i].qty++;
//       this.service.updateCart(this.cart[i]).subscribe((data:any)=>{
//         alert("Added Succesfully");
//         this.ngOnInit();
//       });
//       break;

//     }else{
//       break;
//     }
//   }
// }

// if(i == this.cart.length){
//   console.log(item);
//   this.service.addToCart(item).subscribe((data:any)=>{
//   alert("Added Succesfully");
//   this.ngOnInit();

// });
// this.service.cartCount(this.service.getUser().userId).subscribe((data:any)=>{
// this.cartCount = data;
// });
// }
//   }
//   searchByValue(value:any){
// console.log(value);
// this.service.searchByValue(value.search).subscribe((data:any)=>{
//   console.log(data);
//   this.productList = data;
// });

//   }
//   searchh(value:any){
//     this.service.searchCategory(value).subscribe((data:any)=>{
//     console.log(data);
//     this.productList = data;
//     });
//   }


  
//   success(){

//     let text = "Sure You Want to Logout";
//     if (confirm(text) == true) {
//       this.router.navigate(['']);
//       Swal.fire(this.thisUser+ '\nThank You','You had logged out successfully','success');
//     } else {
//       this.refreshPage();
//     }

//   }
//   refreshPage() {
//     let currentUrl = this.router.url;
//     this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
//       this.router.navigate([currentUrl]);
//     });
//   }

}
