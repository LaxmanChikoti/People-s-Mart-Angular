import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  ProductList: any;
  thisUser:any;
  constructor(private service: ProductService,private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.service.getAllProducts().subscribe((data:any)=> {
       console.log(data);
      this.ProductList = data;
    });
    this.thisUser=this.service.getUser().userName;
  }
  success(){
    let text = "Sure You Want to Logout";
    if (confirm(text) == true) {
      this.router.navigate(['']);
      alert("ADMIN\nThank You\nVisit Again");
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
