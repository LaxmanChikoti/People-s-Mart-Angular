import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeneeds',
  templateUrl: './homeneeds.component.html',
  styleUrls: ['./homeneeds.component.css']
})
export class HomeneedsComponent implements OnInit{
 
  homeneeds:any;

  ngOnInit(): void {
   
    this.homeneeds=[{'productId':'140','productName':'Light weight hand mixer','productDescription':'','productCategoryId':'555','productPrice':'','productImage':'assets/images/LightWeight HandMixer.jpg','productQuantity':'1'},
    {'productId':'141','productName':'Mini Blender','productDescription':'','productCategoryId':'555','productPrice':'16,999.00','productImage':'assets/images/Mini Blender.webp','productQuantity':'1'},
    {'productId':'142','productName':'Pigeon Electric Kettle','productDescription':'','productCategoryId':'555','productPrice':'','productImage':'assets/images/Pigeon Electric kettle.webp','productQuantity':'1'},
    {'productId':'143','productName':'Philips Mixer Grinder','productDescription':'','productCategoryId':'555','productPrice':'','productImage':'assets/images/Philips Mixer Grinder.webp','productQuantity':'1'},
    {'productId':'144','productName':'Powder Press Coffe Tampers','productDescription':'','productCategoryId':'555','productPrice':'','productImage':'assets/images/Powder Press Coffe Tampers.jpg','productQuantity':'1'},
    {'productId':'145','productName':'Prestige Sandwich Maker','productDescription':'','productCategoryId':'555','productPrice':'','productImage':'assets/images/Prestige Sandwich Maker.webp','productQuantity':'1'},
    {'productId':'146','productName':'Vaccum Cleaner','productDescription':'','productCategoryId':'555','productPrice':'','productImage':'assets/images/Vaccum Cleaner.webp','productQuantity':'1'},
    {'productId':'147','productName':'Multi Kadai With Stainless Steel','productDescription':'','productCategoryId':'555','productPrice':'','productImage':'assets/images/Multi Kadai With Stainless Steel.webp','productQuantity':'1'},
    {'productId':'148','productName':'Oven Toaster','productDescription':'','productCategoryId':'555','productPrice':'','productImage':'assets/images/Oven Toaster.jpg','productQuantity':'1'},
    {'productId':'149','productName':'Fridge Storage Boxes','productDescription':'','productCategoryId':'555','productPrice':'','productImage':'assets/images/Fridge Storage Boxes.jpg','productQuantity':'1'},
    {'productId':'150','productName':'Plantex Secure ladder','productDescription':'','productCategoryId':'555','productPrice':'','productImage':'assets/images/Plantex Secure Ladder.webp','productQuantity':'1'},
    {'productId':'151','productName':'Copper Bottle along With 2 glasses','productDescription':'','productCategoryId':'555','productPrice':'','productImage':'assets/images/Copper Bottle Along With 2 Glasses.jpg','productQuantity':'1'},
    {'productId':'152','productName':'Havells Iron Box','productDescription':'','productCategoryId':'555','productPrice':'','productImage':'assets/images/Havells Iron Box.webp','productQuantity':'1'},
    {'productId':'153','productName':'Serving bowls And spoons','productDescription':'','productCategoryId':'555','productPrice':'','productImage':'assets/images/Serving Bowls and Spoons.jpg','productQuantity':'1'},
    {'productId':'154','productName':'Water Dispenser','productDescription':'','productCategoryId':'555','productPrice':'','productImage':'assets/images/Water Dispenser.webp','productQuantity':'1'},
    {'productId':'155','productName':'Prestige Induction CookTop','productDescription':'','productCategoryId':'555','productPrice':'','productImage':'assets/images/Prestige Induction CookTop.jpg','productQuantity':'1'},
    {'productId':'156','productName':'Mixer Grinder','productDescription':'','productCategoryId':'555','productPrice':'','productImage':'assets/images/Mixer Grinder.jpg','productQuantity':'1'}

]


  }

}
