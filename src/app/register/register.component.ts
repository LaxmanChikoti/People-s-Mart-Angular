import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EncryptionService } from '../encryption.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  users:any;
  userName:String;
  userAddress:String;
  mobileNumber:String;
  emailId:String;
  password:String;
  userType:String;
  count:any;

  
  constructor(private service:ProductService,private router:Router,private encry:EncryptionService){
   this.users=[{},
  ]
   this.userName='';
   this.userAddress='';
   this.mobileNumber='';
   this.emailId='';
   this.password='';
   this.userType='';


 }

//  ngOnInit(): void {
//    this.service.getAllCountries().subscribe((data : any )=>{
//      this.countries=data;
//      console.log(data);
//    });
//  }

ngOnInit(): void {
this.service.getAllUsers().subscribe((data:any)=>{
this.users = data;
});


}

register(registrationform: any) {
  for (let i of this.users) {
    this.count = 0;
    if (registrationform.emailId == i.emailId) {
      alert("Already Registered");
      this.router.navigate(['login']);
     return;
    }
  }	
 
      var encrypted = this.encry.set('123456$#@$^@1ERF', registrationform.password);
      registrationform.password=encrypted;
      console.log(registrationform);
      this. service.registerUser(registrationform).subscribe((data: any) => {
        Swal.fire('Thank You','You Had Registered Successfully','success');
        this.router.navigate(['login']);
      });
    
}










registrationform(){

 
 console.log(this.userName)
 console.log(this.userAddress)
 console.log(this.mobileNumber)
 console.log(this.emailId)
 console.log(this.password)
 console.log(this.userType)
 alert('Registration Successfull');

}

registrationformsubmit(registrationform:any) {

this.service.registerUser(registrationform).subscribe();
this.router.navigate(['login']);
Swal.fire('Thank You','You Had Registered Successfully','success');

console.log(registrationform);

}


}
