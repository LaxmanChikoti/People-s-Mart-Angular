import { Component } from '@angular/core';
import { ProductService } from '../product.service';

declare var jQuery:any;

@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrls: ['./showusers.component.css']
})
export class ShowusersComponent {

  users:any;
  user:any;
  editObject:any;

  constructor(private servie:ProductService){

    this.users=[{'userId':'','userName':'','userAddress':'','mobileNumber':'','emailId':'','password':''},]
   
   
     this.editObject={'userId':'','userName':'','userAddress':'','mobileNumber':'','emailId':'','password':''};
  }

  ngOnInit(): void {

    this.servie.getAllUsers().subscribe((data:any)=>{
        this.users=data;
        console.log(data);

    });
   
  }

deleteUser(userId:number){

this.servie.deleteUser(userId).subscribe((data:any)=>{
  console.log(data);
  const i = this.users.findIndex((element:any)=>{
   return element.userId == userId;

  });
this.users.splice(i,1);
});


}


showEditPopup(user:any){
this.editObject=user;
jQuery('#userModel').modal('show');

}


updateuser(){
 this.servie.updateUser(this.editObject).subscribe();
 console.log(this.editObject);
  }

}
