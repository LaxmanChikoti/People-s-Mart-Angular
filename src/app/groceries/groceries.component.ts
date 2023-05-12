import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {
 
  groceries:any;
  product:any;
  
constructor(private service :ProductService,private router :Router){
       
  this.product="";

  this.groceries=[{'productId':'101','productName':'Pasta','productDescription':'Per 100g: Energy-359kcal, Protein-5.7g, Carbohydrate- 80.4g, Total Sugar- 0.7g, Added Sugar-0g, Dietary Fibre-2.9g, Salt-0g, Sodium-5.3mg, Total Fat-1.6g, Saturated Fat-0.3g, Transfat-0g, Cholestrol-0mg','productCategoryId':'111','productPrice':'1999.99','productImage':'assets/images/pasta.png','productQuantity':'1'},
  {'productId':'102','productName':'Rice','productDescription':'HMT','productCategoryId':'111','productPrice':'1200.00','productImage':'assets/images/HMT.jpeg','productQuantity':'1'},
  {'productId':'103','productName':'Bread','productDescription':'Brown','productCategoryId':'111','productPrice':'120.00','productImage':'assets/images/Bread.jpg','productQuantity':'1'},
  {'productId':'104','productName':'Flour','productDescription':'White','productCategoryId':'111','productPrice':'98.00','productImage':'assets/images/Flour.webp','productQuantity':'1'},
  {'productId':'105','productName':'Food Yoga Meal','productDescription':'400g','productCategoryId':'111','productPrice':'115.00','productImage':'assets/images/Food Yoga Meal.jpg','productQuantity':'1'},
  {'productId':'106','productName':'AASHIRVAAD ATTA','productDescription':'1KG','productCategoryId':'111','productPrice':'129.00','productImage':'assets/images/Aashirvaad.png','productQuantity':'1'},
  {'productId':'107','productName':'Red Label','productDescription':'500g','productCategoryId':'111','productPrice':'145.00','productImage':'assets/images/Red Label.jpg','productQuantity':'1'},
  {'productId':'108','productName':'Freedom Oil','productDescription':'1 Litre','productCategoryId':'111','productPrice':'130.00','productImage':'assets/images/Freedom.jpg','productQuantity':'1'},
  {'productId':'108','productName':'Pine Apple','productDescription':'500g','productCategoryId':'111','productPrice':'60.00','productImage':'assets/images/Pine Apple.jpeg','productQuantity':'1'},
  {'productId':'109','productName':'Apple','productDescription':'2 Pcs','productCategoryId':'111','productPrice':'100.00','productImage':'assets/images/Apple 2 pcs.jpg','productQuantity':'1'},
  {'productId':'110','productName':'Orange','productDescription':'3 Pcs','productCategoryId':'111','productPrice':'170.00','productImage':'assets/images/Orange pcs.jpg','productQuantity':'1'},
  {'productId':'111','productName':'Kiwi','productDescription':'6 pcs','productCategoryId':'111','productPrice':'220.00','productImage':'assets/images/Kiwi 6pcs.jpg','productQuantity':'1'},
  {'productId':'112','productName':'Cabbage','productDescription':'1Kg','productCategoryId':'111','productPrice':'70.00','productImage':'assets/images/cabbage.jpeg','productQuantity':'1'},
  {'productId':'113','productName':'Red Capsicum','productDescription':'1kg','productCategoryId':'111','productPrice':'190.00','productImage':'assets/images/Red Capsicum.jpg','productQuantity':'1'},
  {'productId':'114','productName':'broccoli','productDescription':'1Kg','productCategoryId':'111','productPrice':'500.00','productImage':'assets/images/Broccoli.jpeg','productQuantity':'1'},
  {'productId':'115','productName':'Hop Shorts','productDescription':'1Kg','productCategoryId':'111','productPrice':'700.00','productImage':'assets/images/Hop Shorts.jpg','productQuantity':'1'},
  {'productId':'116','productName':'Surf Excel','productDescription':'1 Litre','productCategoryId':'111','productPrice':'160.00','productImage':'assets/images/surfExcel.jpg','productQuantity':'1'},
  {'productId':'117','productName':'Persil','productDescription':'1 Litre','productCategoryId':'111','productPrice':'130.00','productImage':'assets/images/Persil.png','productQuantity':'1'},
  {'productId':'118','productName':'Dryfruit Milk Powder','productDescription':'500g','productCategoryId':'111','productPrice':'300.00','productImage':'assets/images/Dryfruit Milk Powder.jpg','productQuantity':'1'},
  {'productId':'119','productName':'NRK-Dry-Fruits-Chivda','productDescription':'700g','productCategoryId':'111','productPrice':'400.00','productImage':'assets/images/NRK-Dry-Fruits-Chivda.jpeg','productQuantity':'1'},
  {'productId':'120','productName':'Pantajali Walnuts','productDescription':'700g','productCategoryId':'111','productPrice':'604.00','productImage':'assets/images/Pantajali Walnuts.jpg','productQuantity':'1'},

]
  
}

productList: any;
  cartCount: number = 0;
  cart: any;
  thisUser: any;
  

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((data:any)=>{
    this.productList = data;
    });
    this.service.displayCart(this.service.getUser().userId).subscribe((data:any)=>{
      this.cart = data;
    });
    this.service.cartCount(this.service.getUser().userId).subscribe((data:any)=>{
     this.cartCount = data;
    });
    this.thisUser = this.service.getUser().userName;

  }

  addToCart(item :any){
let i = 0;
for(; i < this.cart.length; i++){
  if(this.cart[i].productId == item.productId){

    let text = "product already exits! \n Do You Want To Add this?";
    if(confirm(text) == true){
      this.cart[i].qty++;
      this.service.updateCart(this.cart[i]).subscribe((data:any)=>{
        alert("Added Succesfully");
        this.ngOnInit();
      });
      break;

    }else{
      break;
    }
  }
}

if(i == this.cart.length){
  console.log(item);
  this.service.addToCart(item).subscribe((data:any)=>{
  alert("Added Succesfully");
  this.ngOnInit();

});
this.service.cartCount(this.service.getUser().userId).subscribe((data:any)=>{
this.cartCount = data;
});
}
  }
  searchByValue(value:any){
console.log(value);
this.service.searchByValue(value.search).subscribe((data:any)=>{
  console.log(data);
  this.productList = data;
});

  }
  searchh(value:any){
    this.service.searchCategory(value).subscribe((data:any)=>{
    console.log(data);
    this.productList = data;
    });
  }


  
  success(){

    let text = "Sure You Want to Logout";
    if (confirm(text) == true) {
      this.router.navigate(['']);
      Swal.fire('\nThank You','You had logged out successfully','success');
    } else {
      this.refreshPage();
    }

  }
  refreshPage() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

}








  

