import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EncryptionService } from '../encryption.service';
// import { EncryptionService } from '../encryption.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  users:any;
  userData:any;
  id:string;
  password:string;
  constructor(private service:ProductService,private router:Router,private route:Router,private encry :EncryptionService){  
    this.users=[{'userId':'','userName':'','userAddress':'','mobileNumber':'','emailId':'','password':'','userType':''},];

    this.id= '';
    this.password='';
    this.getAllUsers();

  }
  ngOnInit(): void {
    var encrypted = this.encry.set('123456$#@$^@1ERF','laxman123');
    var decrypted = this.encry.get('123456$#@$^@1ERF',encrypted);

    console.log('Encrypted'+encrypted);
    console.log('Encrypted'+decrypted);
  }

getAllUsers(){

  this.service.getAllUsers().subscribe((data:any)=>{

    this.userData = data;
    console.log("this is userdata "+data);

  });
}


  

    logUser:any;
    loginformsubmit(loginForm:any){
         console.log(loginForm);
         if(loginForm.emailId == "admin@gmail.com" &&  loginForm.password == "admin"){
          this.service.setUserLoggedIn();
          this.router.navigate(['admin']);
          Swal.fire('Thank You','Welcome Admin','success');
          console.log(this.id);
          console.log(this.password);
          }
          else{
        //  this.users.forEach((user:any) => {
          for(let u of this.userData){
            if(loginForm.emailId == u.emailId &&  loginForm.password == this.encry.get('123456$#@$^@1ERF',u.password)){
              this.logUser = u;
              let ser = JSON.stringify(this.logUser);
              localStorage.setItem("user",ser);
              Swal.fire('Welcome'+'  '+u.userName,'You Had Logged In','success');
             this.service.setUserLoggedIn();
             this.router.navigate(['user']);
             return;
          } 
             }
         
        //  });

        }

    }

  }











































  // ngOnInit(): void {
  //   this.service.getAllUsers().subscribe((data: any) => {  
  //     this.user = data;
  //     console.log(data);
  //   });
   
  // }
  // login(loginForm:any){
  //  console.log(loginForm);
  //   let i=0;
  //   for(i=0;i<this.user.length;i++){
  //     if(loginForm.id == this.user[i].emailId && loginForm.password ==  this.user[i].password){
  //       this.service.setUser(this.user[i]);
  //       console.log(this.service.getUser());
  //       if(this.user[i].userType == "admin"){
  //          this.service.isUserLogged=true;
  //         alert("Welcome "+this.user[i].userName);
  //           this.route.navigate(['home']);
  //           break;
  //       }else{
  //           alert("Welcome "+this.user[i].userName);
  //           this.route.navigate(['home']);
  //           break;
  //       }
       
  //     }
  //   }
  //   if(i == this.user.length){
  //     alert("not found");
  //   }
  // }
   

