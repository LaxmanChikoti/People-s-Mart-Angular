import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  
  mobiles:any;

  ngOnInit(): void {
    
    this.mobiles=[{'productId':'120','productName':'Redmi Note 9 pro Max','productDescription':'','productCategoryId':'222','productPrice':'','productImage':'assets/images/Redmi Note 9 Pro.webp','productQuantity':'1'},
    {'productId':'121','productName':'Samsung Galaxy S20','productDescription':'','productCategoryId':'222','productPrice':'16,999.00','productImage':'assets/images/Samsung Galaxy s20.webp','productQuantity':'1'},
    {'productId':'122','productName':'OnePlus','productDescription':'','productCategoryId':'222','productPrice':'','productImage':'assets/images/OnePlus.webp','productQuantity':'1'},
    {'productId':'123','productName':'Apple Iphone','productDescription':'','productCategoryId':'222','productPrice':'','productImage':'assets/images/Apple Iphone.webp','productQuantity':'1'},
    {'productId':'124','productName':'Moto G Power','productDescription':'','productCategoryId':'222','productPrice':'','productImage':'assets/images/Moto G power.webp','productQuantity':'1'},
    {'productId':'125','productName':'Google Pixel 4a','productDescription':'','productCategoryId':'222','productPrice':'','productImage':'assets/images/Google Pixel 4a.webp','productQuantity':'1'},
    {'productId':'126','productName':'Oppo A77','productDescription':'','productCategoryId':'222','productPrice':'','productImage':'assets/images/Oppo A77.webp','productQuantity':'1'},
    {'productId':'127','productName':'Lava Blaze 5G','productDescription':'','productCategoryId':'222','productPrice':'','productImage':'assets/images/Lava Blaze 5G.webp','productQuantity':'1'},
    {'productId':'128','productName':'Techno POVA Neo 5G','productDescription':'','productCategoryId':'222','productPrice':'','productImage':'assets/images/Techno POVA Neo 5G.webp','productQuantity':'1'},
    {'productId':'129','productName':'POKO M3','productDescription':'','productCategoryId':'222','productPrice':'','productImage':'assets/images/POCO M3.webp','productQuantity':'1'},
    {'productId':'130','productName':'Samsung Galaxy A13','productDescription':'','productCategoryId':'222','productPrice':'','productImage':'assets/images/Samsung Galaxy A13.webp','productQuantity':'1'},
    {'productId':'131','productName':'Techno Spark 7','productDescription':'','productCategoryId':'222','productPrice':'','productImage':'assets/images/Techno Spark 7.webp','productQuantity':'1'},
    {'productId':'132','productName':'OnePlus Nord 2','productDescription':'','productCategoryId':'222','productPrice':'','productImage':'assets/images/Oneplus Nord 2.webp','productQuantity':'1'},
    {'productId':'133','productName':'Samsung Galaxy Note 8','productDescription':'','productCategoryId':'222','productPrice':'','productImage':'assets/images/Samsung Galaxy Note 8.webp','productQuantity':'1'},
    {'productId':'134','productName':'Nokia G11','productDescription':'','productCategoryId':'222','productPrice':'','productImage':'assets/images/Nokia G11.webp','productQuantity':'1'},
    {'productId':'135','productName':'Vivo Y22','productDescription':'','productCategoryId':'222','productPrice':'','productImage':'assets/images/Vivo Y22.jpg','productQuantity':'1'},
    {'productId':'136','productName':'Techno Spark 9','productDescription':'','productCategoryId':'222','productPrice':'','productImage':'assets/images/Techno Spark 9.webp','productQuantity':'1'},
    {'productId':'137','productName':'IKALL Z3 Smartphone','productDescription':'','productCategoryId':'222','productPrice':'','productImage':'assets/images/IKALL Z3 Smartphone.webp','productQuantity':'1'},
    {'productId':'138','productName':'Samsung Galaxy ZFold3 5G','productDescription':'','productCategoryId':'222','productPrice':'','productImage':'assets/images/Samsung Galaxy ZFold3 5G.webp','productQuantity':'1'},
    {'productId':'139','productName':'Samsung Galaxy Flip3 5G','productDescription':'','productCategoryId':'222','productPrice':'','productImage':'assets//images/Samsung Galaxy Flip3 5G.webp','productQuantity':'1'},
    {'productId':'139','productName':'Apple Iphone 13','productDescription':'','productCategoryId':'222','productPrice':'','productImage':'assets/images/Apple Iphone 13.webp','productQuantity':'1'}

]
  }


}
