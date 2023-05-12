import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
declare var jQuery:any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  usercart:any;
  cart:any;
  total:any;
  customerinfo:any;
  cartCount: number = 0;
  editObject:any;
  user:any
  users:any;
  address:any;

  constructor(private service:ProductService,private router:Router){
    this.users=[{'userId':'','userName':'','userAddress':'','mobileNumber':'','emailId':'','password':'','userType':''},]
   

    this.editObject={'userId':'','userName':'','userAddress':'','mobileNumber':'','emailId':'','password':'','userType':''};
  
    this.total=0;
  }
  ngOnInit(): void {
  
    this.customerinfo=this.service.getUser();
    this.address = this.service.getUser().userAddress;
    this.service.cartCount(this.service.getUser().userId).subscribe((data: any) => {
      this.cartCount = data;
    })
    this.service.displayCart(this.service.getUser().userId).subscribe((data: any) => {
      this.usercart = data;
      this.total=0;
      this.usercart.forEach((val:any)=>{
        this.total+=(val.productPrice*val.productQuantity);
      })
      this.total=this.total.toFixed(2);
      this.service.setAmount(this.total);
    });
    
  }
    options = {
    "key": "rzp_test_7HdkaZ1xFGPomB", // Enter the Key ID generated from the Dashboard
    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "PeopleMart",
    "description": "Test Transaction",
    "image": "httservice://mazzainnovation.com/wp-content/uploads/2015/02/phyto-logo.png",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "httservice://goodluckhours.com/payment-successful/",
    "prefill": {
        "name": this.service.getUser().userName,
        "email": this.service.getUser().emailId,
        "contact": this.service.getUser().mobileNumber
    },
    "notes": {
        "address": "Head Office Address, serviceR PrimeTowers, Survey No 126P, DLF Road, Beside DLF Cyber City, Gachibowli, Hyderabad, Telangana 500032."
    },
    "theme": {
        "color": "#3399cc"
    }
};
rzp1:any;
pay(total:any){
  this.options.amount=total;
  this.rzp1 = new this.service.nativeWindow.Razorpay(this.options);
  this.rzp1.open(); 
    
}


    update(address:any){
      this.address = address;

      
    }


}
