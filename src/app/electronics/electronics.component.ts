import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit{

  Electronics:any;


  ngOnInit(): void {
    
    this.Electronics=[{'productId':'176','productName':'Aroma Ear NeckBand','productDescription':'','productCategoryId':'444','productPrice':'','productImage':'assets/images/Aroma neckband.webp','productQuantity':'1'},
    {'productId':'177','productName':'boAt Ear Buds','productDescription':'','productCategoryId':'444','productPrice':'16,999.00','productImage':'assets/images/Boat EarBuds.jpg','productQuantity':'1'},
    {'productId':'178','productName':'ASUS Gaming Laptop','productDescription':'','productCategoryId':'444','productPrice':'','productImage':'assets/images/ASUS Gaming Laptop.webp','productQuantity':'1'},
    {'productId':'179','productName':'boAt Rockersz 450 HeadPhones','productDescription':'','productCategoryId':'444','productPrice':'','productImage':'assets/images/boAt Rockersz 450 HeadPhones.webp','productQuantity':'1'},
    {'productId':'124','productName':'HP 1115G4 laptop','productDescription':'','productCategoryId':'444','productPrice':'','productImage':'assets/images/HP 1115G4 laptop.webp','productQuantity':'1'},
    {'productId':'125','productName':'HP ChromeBook X360','productDescription':'','productCategoryId':'444','productPrice':'','productImage':'assets/images/HP ChromeBook X360.webp','productQuantity':'1'},
    {'productId':'126','productName':'JBL EarBuds','productDescription':'','productCategoryId':'444','productPrice':'','productImage':'assets/images/JBL EarBuds.webp','productQuantity':'1'},
    {'productId':'127','productName':'Lenovo Core i5 Gaming Laptop','productDescription':'','productCategoryId':'444','productPrice':'','productImage':'assets/images/Lenovo core I5 Gaming Laptop.webp','productQuantity':'1'},
    {'productId':'128','productName':'Toshiba Tv 43 inches','productDescription':'','productCategoryId':'444','productPrice':'','productImage':'assets/images/Toshiba Tv 43 inches.webp','productQuantity':'1'},
    {'productId':'129','productName':'Sony Tv 55 inches','productDescription':'','productCategoryId':'444','productPrice':'','productImage':'assets/images/Sony Tv 55 inches.jpg','productQuantity':'1'},
    {'productId':'130','productName':'Samsung Tv 43 Inches','productDescription':'','productCategoryId':'444','productPrice':'','productImage':'assets/images/Samsung  Tv 43 inches.webp','productQuantity':'1'},
    {'productId':'131','productName':'Redmi Tv 65 Inches','productDescription':'','productCategoryId':'444','productPrice':'','productImage':'assets/images/Redmi tv 65 inches.jpg','productQuantity':'1'},
    {'productId':'132','productName':'Canon EOS 1DX','productDescription':'','productCategoryId':'444','productPrice':'','productImage':'assets/images/Canon EOS  1DX.jpg','productQuantity':'1'},
    {'productId':'133','productName':'Canon M50 Mark','productDescription':'','productCategoryId':'444','productPrice':'','productImage':'assets/images/Canon M50 Mark.jpg','productQuantity':'1'},
    {'productId':'134','productName':'Digital WebCamera','productDescription':'','productCategoryId':'444','productPrice':'','productImage':'assets/images/Digital WebCamera.jpg','productQuantity':'1'},
    {'productId':'135','productName':'Instax Mini Camera','productDescription':'','productCategoryId':'444','productPrice':'','productImage':'assets/images/Instax Mini Camera.jpg','productQuantity':'1'},
    {'productId':'136','productName':'Instax Square Camera','productDescription':'','productCategoryId':'444','productPrice':'','productImage':'assets/images/Instax Square Camera.jpg','productQuantity':'1'},
    {'productId':'137','productName':'JBL Soundbar Home Theatre','productDescription':'','productCategoryId':'444','productPrice':'','productImage':'assets/images/JBL Soundbar Home Theatre.webp','productQuantity':'1'},
    {'productId':'138','productName':'USB Hub','productDescription':'','productCategoryId':'444','productPrice':'','productImage':'assets/images/USB Hub.webp','productQuantity':'1'},
    {'productId':'139','productName':'Wireless Mouse','productDescription':'','productCategoryId':'444','productPrice':'','productImage':'assets/images/Wireless Mouse.webp','productQuantity':'1'},
    {'productId':'139','productName':'Noise Pulse Watch','productDescription':'','productCategoryId':'444','productPrice':'','productImage':'assets/images/Noise Pulse Watch.jpg'}

];
  }

  }

