import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.css']
})
export class AppliancesComponent implements OnInit {

  appliances:any;

  ngOnInit(): void {
    
    this.appliances=[{'productId':'157','productName':'Wooden Room Partition','productDescription':'','productCategoryId':'555','productPrice':'8,999','productImage':'assets/images/Wooden Room partition.webp','productQuantity':'1'},
    {'productId':'158','productName':'Wooden Frame','productDescription':'','productCategoryId':'555','productPrice':'16,999.00','productImage':'assets/images/Wooden Frame.webp','productQuantity':'1'},
    {'productId':'159','productName':'Office Arm Chair','productDescription':'','productCategoryId':'555','productPrice':'3,499','productImage':'assets/images/Office Arm chair.webp','productQuantity':'1'},
    {'productId':'160','productName':'LED Tv','productDescription':'','productCategoryId':'555','productPrice':'35,000','productImage':'assets/images/LED TV.webp','productQuantity':'1'},
    {'productId':'161','productName':'Water Purifier','productDescription':'','productCategoryId':'555','productPrice':'14,999','productImage':'assets/images/Water Purifier.webp','productQuantity':'1'},
    {'productId':'162','productName':'Wooden 3 Door Wardrobe','productDescription':'','productCategoryId':'555','productPrice':'16,499','productImage':'assets/images/Wooden 3 Door Wardrobe.webp','productQuantity':'1'},
    {'productId':'163','productName':'Wood Queen Bed','productDescription':'','productCategoryId':'555','productPrice':'18,000','productImage':'assets/images/Wood Queen bed.webp','productQuantity':'1'},
    {'productId':'164','productName':'Water purifier','productDescription':'','productCategoryId':'555','productPrice':'16,000','productImage':'assets/images/water purifierr.webp','productQuantity':'1'},
    {'productId':'165','productName':'Ac White','productDescription':'','productCategoryId':'555','productPrice':'29,000','productImage':'assets/images/Ac-white.webp','productQuantity':'1'},
    {'productId':'166','productName':'Solid Wood Dining Table','productDescription':'','productCategoryId':'555','productPrice':'21,000','productImage':'assets/images/Solid Wood Dining.webp','productQuantity':'1'},
    {'productId':'167','productName':'Tower Air Cooler','productDescription':'','productCategoryId':'555','productPrice':'14,400','productImage':'assets/images/Tower Air Cooler.webp','productQuantity':'1'},
    {'productId':'168','productName':'Air Cooler','productDescription':'','productCategoryId':'555','productPrice':'17,499','productImage':'assets/images/Air Cooler.webp','productQuantity':'1'},
    {'productId':'169','productName':'Nature Scenery Frame','productDescription':'','productCategoryId':'555','productPrice':'5999','productImage':'assets/images/Nature Scenery.webp','productQuantity':'1'},
    {'productId':'170','productName':'Samsung 6kgs Washing Machine','productDescription':'','productCategoryId':'555','productPrice':'13,499','productImage':'assets/images/Samsung 6kgs Washine Machine.webp','productQuantity':'1'},
    {'productId':'171','productName':'Samsung Side By Side Refridgerator','productDescription':'','productCategoryId':'555','productPrice':'12,499','productImage':'assets/images/Samsung Side By Side Refrogerator.webp','productQuantity':'1'},
    {'productId':'172','productName':'HandCrafted wooden Frame','productDescription':'','productCategoryId':'555','productPrice':'8,542','productImage':'assets/images/HandCrafted Wooden Frame.webp','productQuantity':'1'},
    {'productId':'173','productName':'Mountains Art','productDescription':'','productCategoryId':'555','productPrice':'7,865','productImage':'assets/images/Mountains Art.webp','productQuantity':'1'}  ]

  }

}
