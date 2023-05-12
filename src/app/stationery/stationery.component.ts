import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stationery',
  templateUrl: './stationery.component.html',
  styleUrls: ['./stationery.component.css']
})
export class StationeryComponent implements OnInit {

  stationeries:any;

  ngOnInit(): void {
    
    
  this.stationeries=[{'productId':'201','productName':'Double Sided White Board','productDescription':'','productCategoryId':'999','productPrice':'499','productImage':'assets/images/Double Sided White Board.webp','productQuantity':'1'},
  {'productId':'202','productName':'Pencil Smart Kit','productDescription':'','productCategoryId':'999','productPrice':'699','productImage':'assets/images/Pencil Smart Kit.webp','productQuantity':'1'},
  {'productId':'203','productName':'Classmate NoteBooks','productDescription':'','productCategoryId':'999','productPrice':'249','productImage':'assets/images/Classmate NoteBooks.webp','productQuantity':'1'},
  {'productId':'204','productName':'Neon Sheets','productDescription':'','productCategoryId':'999','productPrice':'299','productImage':'assets/images/Neon Sheets 100.webp','productQuantity':'1'},
  {'productId':'205','productName':'DIY Crafting kit','productDescription':'','productCategoryId':'999','productPrice':'499','productImage':'assets/images/DIY Crafting kit.webp','productQuantity':'1'},
  {'productId':'206','productName':'Drawing Board','productDescription':'','productCategoryId':'999','productPrice':'199','productImage':'assets/images/Drawing Sketches.webp','productQuantity':'1'},
  {'productId':'207','productName':'Drawing Sketches','productDescription':'','productCategoryId':'999','productPrice':'399','productImage':'assets/images/Drawing Sketches.webp','productQuantity':'1'},
  {'productId':'208','productName':'Envelope Document','productDescription':'','productCategoryId':'999','productPrice':'99','productImage':'assets/images/Envelope Document.webp','productQuantity':'1'},
  {'productId':'209','productName':'Water Color Tubes','productDescription':'','productCategoryId':'999','productPrice':'99','productImage':'assets/images/Water color Tube.webp','productQuantity':'1'},
  {'productId':'210','productName':'Classmate Notebook','productDescription':'','productCategoryId':'999','productPrice':'129','productImage':'assets/images/Classmate NoteBook.webp','productQuantity':'1'},
  {'productId':'211','productName':'Document File Bag','productDescription':'','productCategoryId':'999','productPrice':'149','productImage':'assets/images/Document File Bag.webp','productQuantity':'1'},
  {'productId':'212','productName':'Silicon  Resin Keychain','productDescription':'','productCategoryId':'999','productPrice':'59','productImage':'assets/images/Silicon Resin KeyChain.webp','productQuantity':'1'},
  {'productId':'213','productName':'Doodle Unicorn Notebook','productDescription':'','productCategoryId':'999','productPrice':'299','productImage':'assets/images/Doodle Unicorn Notebook.webp','productQuantity':'1'},
  {'productId':'214','productName':'Globe','productDescription':'','productCategoryId':'999','productPrice':'459','productImage':'assets/images/Globe.webp','productQuantity':'1'},
  {'productId':'215','productName':'Glitter Sheets','productDescription':'','productCategoryId':'999','productPrice':'299','productImage':'assets/images/Glitter Sheets.webp','productQuantity':'1'},
  {'productId':'216','productName':'Glue Favicol','productDescription':'','productCategoryId':'999','productPrice':'59','productImage':'assets/images/Glue Favicol.webp','productQuantity':'1'},
  {'productId':'217','productName':'Drawing Paper Container','productDescription':'','productCategoryId':'999','productPrice':'129','productImage':'assets/images/Drawing Paper Container.webp','productQuantity':'1'},
  {'productId':'218','productName':'Jar Of Ball Pens','productDescription':'','productCategoryId':'999','productPrice':'199','productImage':'assets/images/Jar of Ball pen Ezee.webp','productQuantity':'1'},
  {'productId':'219','productName':'Shades Pencil Colors','productDescription':'','productCategoryId':'999','productPrice':'189','productImage':'assets/images/Shades Pencil Colors.webp','productQuantity':'1'},
  {'productId':'220','productName':'Paint Brushes combo','productDescription':'','productCategoryId':'999','productPrice':'109','productImage':'assets/images/Paint Brushes Combo.webp','productQuantity':'1'},
  {'productId':'221','productName':'Mini Drafter','productDescription':'','productCategoryId':'999','productPrice':'299','productImage':'assets/images/Mini Drafter Scale.webp','productQuantity':'1'}
 

]

  }

}
