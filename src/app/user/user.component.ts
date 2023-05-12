import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  productList: any;
  cartCount: number = 0;
  cart: any;
  thisUser: any;
  userId:any;
  user:any;
  users:any;
  e1:any;
  e2:any;
  e3:any;
  name:string;
  constructor(private router:Router,private service:ProductService){
    this.user = localStorage.getItem("user");
   
    this.user = JSON.parse(this.user);
    this.userId = this.user.userId;
    this.name = this.user.username;
    
    this.getAllProducts();
    this.displayCart();
    this.cartCount1();//if not these has to be commented
  }

  ngOnInit(): void {
    
    this.thisUser = this.service.getUser();
    this.e1 = document.getElementById("log");
    this.e1.style.display = 'none';

    this.e2 = document.getElementById("login");
    this.e2.style.display = 'block';

    this.e3 = document.getElementById("cart");
    this.e3.style.display = 'none';
    this.log();
  }

  log(){
    

    if(this.service.isUserLogged){
      this.e1 = document.getElementById("log");
      this.e1.style.display = 'block';

      this.e2 = document.getElementById("login");
      this.e2.style.display = 'none';

      this.e3 = document.getElementById("cart");
    this.e3.style.display = 'block';

    }
  }

getGroceries(){

  this.service.getAllProducts().subscribe((data:any)=>{
  this.productList = [];
    for(let g of data){
      if(g.productCategoryId == 1){
        this.productList.push(g);
      }
    }
    // alert(this.user);
  })
}

getMobiles(){
  this.service.getAllProducts().subscribe((data:any)=>{
    this.productList = [];
      for(let g of data){
        if(g.productCategoryId == 2){
          this.productList.push(g);
        }
      }
    })

}

getFashion(){
  this.service.getAllProducts().subscribe((data:any)=>{
    this.productList = [];
      for(let g of data){
        if(g.productCategoryId == 3){
          this.productList.push(g);
        }
      }
    })


}

getElectronics(){
  this.service.getAllProducts().subscribe((data:any)=>{
    this.productList = [];
      for(let g of data){
        if(g.productCategoryId == 4){
          this.productList.push(g);
        }
      }
    })


}

getHome(){

  this.service.getAllProducts().subscribe((data:any)=>{
    this.productList = [];
      for(let g of data){
        if(g.productCategoryId == 5){
          this.productList.push(g);
        }
      }
    })

}

getAppliances(){

  this.service.getAllProducts().subscribe((data:any)=>{
    this.productList = [];
      for(let g of data){
        if(g.productCategoryId == 6){
          this.productList.push(g);
        }
      }
    })


}

getToysAndMore(){

  this.service.getAllProducts().subscribe((data:any)=>{
    this.productList = [];
      for(let g of data){
        if(g.productCategoryId == 7){
          this.productList.push(g);
        }
      }
    })

}

getTwoWheelers(){

  this.service.getAllProducts().subscribe((data:any)=>{
    this.productList = [];
      for(let g of data){
        if(g.productCategoryId == 8){
          this.productList.push(g);
        }
      }
    })

}
getStationery(){

  this.service.getAllProducts().subscribe((data:any)=>{
    this.productList = [];
      for(let g of data){
        if(g.productCategoryId == 9){
          this.productList.push(g);
        }
      }
    })


}




  getAllProducts(){
    this.service.getAllProducts().subscribe((data:any)=>{
      this.productList = data;
      });
  }



getAllUsers(){         // printing username in nav bar

  this.service.getAllUsers().subscribe((data:any)=>{
this.users = data;
  });
}



  displayCart(){

    this.service.displayCart(this.userId).subscribe((data:any)=>{
      this.cart = data;
      //alert(this.service.getUser().userId);
    });
  }

cartCount1(){

  this.service.cartCount(this.service.getUser().userId).subscribe((data:any)=>{
    this.cartCount = data;
   });
}

  addToCart(item :any){//if not 181 t0 201 and 213 has to be commented

    if(! this.service.isUserLogged){
      alert("You must Login!");
      return;
    }

let i = 0;

for(; i < this.cart.length; i++){
  if(this.cart[i].productId == item.productId){

    let text = "product already exits! \n Do You Want To Add this?";
    if(confirm(text) == true ){//&& this.service.isUserLogged == true
      this.cart[i].productQuantity++;
      this.service.updateCart(this.cart[i]).subscribe((data:any)=>{
        // if(this.service.isUserLogged == true){
   
        alert("Added Succesfully");
      // }
        this.ngOnInit();
      });
      break;

    }else{
      // alert('You Must Login First');
      // this.router.navigate(['login']);
      break;
    }
  }
}

if(i == this.cart.length ){

  console.log(item);

  this.service.addToCart(item).subscribe((data:any)=>{
    console.log(data);
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
  if(data.length <= 0){
    alert("No Products available");
    window.location.reload();
    return;
  }
  this.productList = data;
});

  }
  searchh(value:any){
    this.service.searchCategory(value.search).subscribe((data:any)=>{
    console.log(data);
    this.productList = data;
    });
  }


  
  success(){

    let text = "Sure You Want to Logout";
    if (confirm(text) == true ) {
      // Swal.fire('\nThank You','You had logged out successfully','success');
      this.service.userLoggedOut();
     
      this.router.navigate(['user']);
      window.location.reload();
      
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

