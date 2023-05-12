import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {
  fashion:any;

  ngOnInit(): void {
    this.fashion=[{'productId':'120','productName':'Mens Cotton Kurta','productDescription':'','productCategoryId':'333','productPrice':'','productImage':'assets/images/Mens Printed Cotton Kurta.webp','productQuantity':'1'},
    {'productId':'157','productName':'Mens Regular Shirt','productDescription':'','productCategoryId':'333','productPrice':'16,999.00','productImage':'assets/images/Regular shirt.webp','productQuantity':'1'},
    {'productId':'158','productName':'Puma T-Shirt','productDescription':'','productCategoryId':'333','productPrice':'','productImage':'assets/images/Puma Tshirt.webp','productQuantity':'1'},
    {'productId':'159','productName':'Women Full SLeeves Hoodie','productDescription':'','productCategoryId':'333','productPrice':'','productImage':'assets/images/Woomen Full Sleeves Hoodie.webp','productQuantity':'1'},
    {'productId':'160','productName':'Casual Layered Top','productDescription':'','productCategoryId':'333','productPrice':'','productImage':'assets/images/Casual Regular Top.webp','productQuantity':'1'},
    {'productId':'161','productName':'Kurta With Palazzo Dupatta','productDescription':'','productCategoryId':'333','productPrice':'','productImage':'assets/images/Kurta With Palazzoo Dupatta Set.webp','productQuantity':'1'},
    {'productId':'162','productName':'Karagiri Women Saree','productDescription':'','productCategoryId':'333','productPrice':'','productImage':'assets/images/KARAGIRI Women Saree.webp','productQuantity':'1'},
    {'productId':'163','productName':'Floral Kurta Pant&Dupatta','productDescription':'','productCategoryId':'333','productPrice':'','productImage':'assets/images/Floral kurta Pant&Dupatta.webp','productQuantity':'1'},
    {'productId':'164','productName':'Women Printed Kurta ','productDescription':'','productCategoryId':'333','productPrice':'','productImage':'assets/images/Women Printed Kurta.webp','productQuantity':'1'},
    {'productId':'165','productName':'Women Lehenga','productDescription':'','productCategoryId':'333','productPrice':'','productImage':'assets/images/Womens Lehenga.webp','productQuantity':'1'},
    {'productId':'166','productName':'Women Regular Fit','productDescription':'','productCategoryId':'333','productPrice':'','productImage':'assets/images/Womens Regular Fit Shirt.jpg','productQuantity':'1'},
    {'productId':'167','productName':'Anarkali Kurta','productDescription':'','productCategoryId':'333','productPrice':'','productImage':'assets/images/Anarkali Kurta.webp','productQuantity':'1'},
    {'productId':'168','productName':'Men Women Sunglasses','productDescription':'','productCategoryId':'333','productPrice':'','productImage':'assets/images/Men Women Round Sunglasses.jpg','productQuantity':'1'},
    {'productId':'169','productName':'Retro Square EyeGlasses','productDescription':'','productCategoryId':'333','productPrice':'','productImage':'assets/images/Retro Square Eyeglasses.jpg','productQuantity':'1'},
    {'productId':'170','productName':'Women Handbags','productDescription':'','productCategoryId':'333','productPrice':'','productImage':'assets/images/Women Handbags.webp','productQuantity':'1'},
    {'productId':'171','productName':'Women Sling Bag','productDescription':'','productCategoryId':'333','productPrice':'','productImage':'assets/images/Red Sling Bag.webp','productQuantity':'1'},
    {'productId':'172','productName':'Titan Watch For Men','productDescription':'','productCategoryId':'333','productPrice':'','productImage':'assets/images/Titan Watch For Men.jpg','productQuantity':'1'},
    {'productId':'173','productName':'Analog Men Watch','productDescription':'','productCategoryId':'333','productPrice':'','productImage':'assets/images/Analog Men Watch.webp','productQuantity':'1'},
    {'productId':'174','productName':'Ladies Neo Women','productDescription':'','productCategoryId':'333','productPrice':'','productImage':'assets/images/Ladies Neo Women Watch.webp','productQuantity':'1'},
    {'productId':'175','productName':'HAndprint Sling For Women','productDescription':'','productCategoryId':'333','productPrice':'','productImage':'assets/images/Printed Handprint Sling for Women.jpg','productQuantity':'1'},
    {'productId':'176','productName':'Womens Straw Sun Hat','productDescription':'','productCategoryId':'333','productPrice':'','productImage':'assets/images/Womens Straw Sun Hat.jpg','productQuantity':'1'}
]
  }

  }


