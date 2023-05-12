import { Component, OnInit } from '@angular/core';
// import Swal from 'sweetalert2';
import { ProductService } from '../product.service';

// declare var jQuery:any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{

  product: any;
  ptd: any;
  flag:any;

  constructor(private service:ProductService){

    this.product=" ";
    this.ptd={'productId':'','productName':'','productDescription':'','productCategoryId':'','productPrice':'','productImage':'','productQuantity':''};
  
  }

  ngOnInit(): void {
    
    this.service.getAllProducts().subscribe((data:any)=>{
      this.product=data;
      console.log(data);
    });
   
  }
  check(val:any){
    this.flag=1;
    this.ptd.productName='';
    this.ptd.productCategoryId='';
    this.ptd.productImage='';
    this.ptd.productPrice='';
    this.ptd.productQuantity='';
    this.ngOnInit();
    }
updateProduct(p:any){
  this.ptd = p;
  this.flag = 0;
}

edit(val:any){
  if(this.flag==1){
    this.add(val);
  }else{
this.service.updateProduct(val).subscribe((data:any)=>{
console.log(data);
});
  }
  }
  deleteProduct(productId:number){
    this.service.deleteProduct(productId).subscribe((data:any)=>{
      this.ngOnInit();
    });

  }
  add(insert:any){
    console.log(insert);
    this.service.addProduct(insert).subscribe((data:any)=>{
      this.ngOnInit();
    })
  }
}

 










  






























// productFormForAdd(productForm:any){
  //   console.log(productForm);
  //   this.service.addProduct(productForm).subscribe((data:any)=>{
  //     this.ngOnInit();
  //   });
  //   Swal.fire('Thank You','Product Added Successfully','success');
   
  // }


