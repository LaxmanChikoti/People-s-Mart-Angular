import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toysandmore',
  templateUrl: './toysandmore.component.html',
  styleUrls: ['./toysandmore.component.css']
})
export class ToysandmoreComponent implements OnInit {

  toys:any;
  ngOnInit(): void {
    this.toys=[{'productId':'177','productName':'Animal Toys','productDescription':'','productCategoryId':'777','productPrice':'','productImage':'assets/images/Animal toys set.jpg','productQuantity':'1'},
    {'productId':'178','productName':'Ball Pool Pit','productDescription':'','productCategoryId':'777','productPrice':'16,999.00','productImage':'assets/images/Ball pool pit for kids.jpg','productQuantity':'1'},
    {'productId':'179','productName':'Beauty Set for Girls','productDescription':'','productCategoryId':'777','productPrice':'','productImage':'assets/images/Beauty set for girls.webp','productQuantity':'1'},
    {'productId':'180','productName':'BullDozer Toy Trruck','productDescription':'','productCategoryId':'777','productPrice':'','productImage':'assets/images/BullDozer Toy Truck.jpg','productQuantity':'1'},
    {'productId':'181','productName':'Cactus Talking Toy','productDescription':'','productCategoryId':'777','productPrice':'','productImage':'assets/images/Cactus Talking Toy.webp','productQuantity':'1'},
    {'productId':'182','productName':'Construction Puzzles','productDescription':'','productCategoryId':'777','productPrice':'','productImage':'assets/images/Constrction Puzzles.webp','productQuantity':'1'},
    {'productId':'183','productName':'Elephant baby pillow','productDescription':'','productCategoryId':'777','productPrice':'','productImage':'assets/images/Elephant baby pillow.jpg','productQuantity':'1'},
    {'productId':'184','productName':'Geometric Blocks Toy','productDescription':'','productCategoryId':'777','productPrice':'','productImage':'assets/images/Geometric Blocks Toy set.webp','productQuantity':'1'},
    {'productId':'185','productName':'Kids Flakes Interlocking Set','productDescription':'','productCategoryId':'777','productPrice':'','productImage':'assets/images/Kids Flakes Interlocking set.jpg','productQuantity':'1'},
    {'productId':'186','productName':'Musical 3D Lights Kids','productDescription':'','productCategoryId':'777','productPrice':'','productImage':'assets/images/Musical 3D Lights kids.webp','productQuantity':'1'},
    {'productId':'187','productName':'Swing Car For kids','productDescription':'','productCategoryId':'777','productPrice':'','productImage':'assets/images/Swing Car For Kids.webp','productQuantity':'1'},
    {'productId':'188','productName':'Technic Race Car','productDescription':'','productCategoryId':'777','productPrice':'','productImage':'assets/images/Technic Race Car.webp','productQuantity':'1'},
    {'productId':'189','productName':'Teddy Bear','productDescription':'','productCategoryId':'777','productPrice':'','productImage':'assets/images/Teddy Bear.webp','productQuantity':'1'},
    {'productId':'190','productName':'Xylophone Guitar Wooden','productDescription':'','productCategoryId':'777','productPrice':'','productImage':'assets/images/Xylophone Guitar Wooden.jpg','productQuantity':'1'},
    {'productId':'191','productName':'Toy Laptop','productDescription':'','productCategoryId':'777','productPrice':'','productImage':'assets/images/Toy Laptop.jpg','productQuantity':'1'},
    {'productId':'192','productName':'Panda Cartoon','productDescription':'','productCategoryId':'777','productPrice':'','productImage':'assets/images/Panda Cartoon Bag.jpg','productQuantity':'1'},
    {'productId':'193','productName':'3D Plastic Car','productDescription':'','productCategoryId':'777','productPrice':'','productImage':'assets/images/3D Plastic Car.jpg','productQuantity':'1'},
    {'productId':'194','productName':'Dinosaur Toy','productDescription':'','productCategoryId':'777','productPrice':'','productImage':'assets/images/Dinosaur Toy Animal.jpg','productQuantity':'1'},
    {'productId':'195','productName':'MatchStick Box','productDescription':'','productCategoryId':'777','productPrice':'','productImage':'assets/images/Machstick Box.jpg','productQuantity':'1'},
    {'productId':'196','productName':'play Flip cellphones','productDescription':'','productCategoryId':'777','productPrice':'','productImage':'assets/images/Play Flip Cells Phones.jpg','productQuantity':'1'},
    {'productId':'197','productName':'Wooden Busy Board','productDescription':'','productCategoryId':'777','productPrice':'','productImage':'assets/images/Technic Race Car.webp','productQuantity':'1'}
  

  ]


  }

}
