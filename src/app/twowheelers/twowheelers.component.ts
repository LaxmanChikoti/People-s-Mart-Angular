import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowheelers',
  templateUrl: './twowheelers.component.html',
  styleUrls: ['./twowheelers.component.css']
})
export class TwowheelersComponent implements OnInit {

  vechiles:any;

  ngOnInit(): void {
    
    this.vechiles=[ {'productId':'121','productName':'Pulsar Ns160','productDescription':'Engine capacity 154CC,Tank Capacity 12L,Milage 45L,Weight 154KG','productCategoryId':'8','productPrice':'1.26lakhs','productImage':'assets/images/ns160.jpg','productQuantity':'1'},
    {'productId':'122','productName':'Pulsar Ns200','productDescription':'Engine capacity 196CC,Tank Capacity 12L,Milage 40L,Weight 170KG','productCategoryId':'8','productPrice':'1.58lakhs','productImage':'assets/images/ns200.jpg','productQuantity':'1'},
    {'productId':'123','productName':'Pulsar Rs200','productDescription':'Engine capacity 199.5CC,Tank Capacity 12L,Milage 35L,Weight 166KG','productCategoryId':'8','productPrice':'1.58lakhs','productImage':'assets/images/rs200.jpg','productQuantity':'1'},
    {'productId':'124','productName':'Pulsar N250','productDescription':'Engine capacity 249.07CC,Tank Capacity 12L,Milage 35L,Weight 180KG','productCategoryId':'8','productPrice':'1.58lakhs','productImage':'assets/images/n250.jpg','productQuantity':'1'},
    {'productId':'125','productName':'Yamaha FZ','productDescription':'Engine capacity 149CC,Tank Capacity 12L,Milage 50KMPL,Weight 135KG','productCategoryId':'8','productPrice':'1.55lakhs','productImage':'assets/images/fz.jpg','productQuantity':'1'},
    {'productId':'126','productName':'Yamaha R15 V3','productDescription':'Engine capacity 155CC,Tank Capacity 12L,Milage 40L,Weight 142KG','productCategoryId':'8','productPrice':'1.78lakhs','productImage':'assets/images/r15.jpg','productQuantity':'1'},
    {'productId':'127','productName':'Yamaha MT15','productDescription':'Engine capacity 155CC,Tank Capacity 12L,Milage 49L,Weight 139KG','productCategoryId':'8','productPrice':'1.84lakhs','productImage':'assets/images/mt15.jpg','productQuantity':'1'},
    {'productId':'128','productName':'Yamaha FZ-X','productDescription':'Engine capacity 154CC,Tank Capacity 12L,Milage 45L,Weight 154KG','productCategoryId':'8','productPrice':'1.60lakhs','productImage':'assets/images/fzx.jpg','productQuantity':'1'},
    {'productId':'129','productName':'Royal Enfeild Classic 350','productDescription':'Engine capacity 346CC,Tank Capacity 13L,Milage 40L,Weight 194KG','productCategoryId':'8','productPrice':'2.38lakhs','productImage':'assets/images/350.jpg','productQuantity':'1'},
    {'productId':'130','productName':'Royal Enfeild Himalayan','productDescription':'Engine capacity 350CC,Tank Capacity 12L,Milage 35L,Weight 200KG','productCategoryId':'8','productPrice':'2..38lakhs','productImage':'assets/images/himalayan.jpg','productQuantity':'1'},
    {'productId':'131','productName':'Royal Enfeild Interseptor','productDescription':'Engine capacity 650CC,Tank Capacity 12L,Milage 35L,Weight 175KG','productCategoryId':'8','productPrice':'3.50lakhs','productImage':'assets/images/interseptor.jpg','productQuantity':'1'},
    {'productId':'132','productName':'Royal Enfeild GT650','productDescription':'Engine capacity 650CC,Tank Capacity 12L,Milage 25L,Weight 165KG','productCategoryId':'8','productPrice':'4.50lakhs','productImage':'assets/images/gt650.jpg','productQuantity':'1'},
    {'productId':'133','productName':'TVS Apache 310RR','productDescription':'Engine capacity 310C,Tank Capacity 12L,Milage 40L,Weight 145KG','productCategoryId':'8','productPrice':'2.65','productImage':'assets/images/310rr.jpg','productQuantity':'1'},
    {'productId':'134','productName':'TVS Apache 200RTR','productDescription':'Engine capacity 198CC,Tank Capacity 12L,Milage 45L,Weight 154KG','productCategoryId':'8','productPrice':'1.68lakhs','productImage':'assets/images/200rtr.jpg','productQuantity':'1'},
    {'productId':'135','productName':'TVS Apache 180 RTR','productDescription':'Engine capacity 179CC,Tank Capacity 12L,Milage 50L,Weight 150KG','productCategoryId':'8','productPrice':'1.50Lakhs','productImage':'assets/images/180rtr.jpg','productQuantity':'1'},
    {'productId':'136','productName':'TVS Apache 160 RTR','productDescription':'Engine capacity 157CC,Tank Capacity 12L,Milage 55L,Weight 140KG','productCategoryId':'8','productPrice':'1.38Lakhs','productImage':'assets/images/160rtr.jpg','productQuantity':'1'},
    {'productId':'137','productName':'OKAYA Freedom LI-2','productDescription':'Range : 100km,Top Speed : 78kmph, charging time 4.30hrs','productCategoryId':'8','productPrice':'74000','productImage':'assets/images/okaya.jpg','productQuantity':'1'},
    {'productId':'138','productName':'OKAYA Faast F2B','productDescription':'Range : 110km,Top Speed : 85kmph, charging time 5.30hrs','productCategoryId':'8','productPrice':'74000','productImage':'assets/images/OKAYA Faast F2B.jpg','productQuantity':'1'},
    {'productId':'139','productName':'Ather ','productDescription':'Range : 100km,Top Speed : 78kmph, charging time 4.30hrs ','productCategoryId':'8','productPrice':'89000','productImage':'assets/images/ather.jpg','productQuantity':'1'},
    {'productId':'140','productName':'OLA S1','productDescription':'Range : 181km,Top Speed : 116kmph, charging time 4hrs','productCategoryId':'8','productPrice':'84000','productImage':'assets/images/olas1.jpg','productQuantity':'1'}
  ]

  }

}
