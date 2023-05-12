import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


function _window(): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   isUserLogged: boolean;
  userDetails: any;
  cart: any;
  amount: any;

  constructor(private httpclient: HttpClient) {

    this.isUserLogged = false;
    this.cart = {
      cartId: 0,
      productId: "",
      userId: "",
      productImage: "",
      productPrice: "",
      productName: "",
      productQuantity: ""

    }

  }
  setUserLoggedIn() {

    this.isUserLogged = true;
    

  }

  userLoggedOut(){
    this.isUserLogged = false;
   
  }
  getUserLogged() {

    return this.isUserLogged;

  }

  setUser(userDetails: any) {

    this.userDetails = userDetails;

  }

  getUser() {
    console.log(this.userDetails)
    this.userDetails = localStorage.getItem("user");
    this.userDetails = JSON.parse(this.userDetails);
    return this.userDetails;

  }

  getAllUsers() {

    return this.httpclient.get('http://localhost:8080/user/displayAllUsers');
  }

  getAllCountries() {

    return this.httpclient.get('https://restcountries.com/v2/all');

  }

  registerUser(registrationform: any) {

    return this.httpclient.post('http://localhost:8080/user/registerUser', registrationform);

  }

  deleteUser(userId: number) {

    return this.httpclient.delete('http://localhost:8080/user/deleteuser/' + userId);

  }

  updateUser(editObject: any) {

    return this.httpclient.put('http://localhost:8080/user/updateUser', editObject);
  }

  getAllProducts() {

    return this.httpclient.get('http://localhost:8080/product/list');
  }

  addProduct(ptd: any) {

    return this.httpclient.post('http://localhost:8080/product/list', ptd);

  }

  deleteProduct(productId: any) {

    return this.httpclient.delete('http://localhost:8080/product/list/' + productId);

  }

  updateProduct(ptd: any) {

    return this.httpclient.put('http://localhost:8080/product/list', ptd);

  }
  // search based on category
  searchCategory(pro: any) {

    console.log(pro);

    return this.httpclient.get("http://localhost:8080/product/search/" + pro);

  }
  //serach based on product name
  searchByValue(productName: any) {
    console.log(productName);
    return this.httpclient.get("http://localhost:8080/product/searchh/" + productName);
  }

  displayCart(val: number) {

    return this.httpclient.get("http://localhost:8080/cart/cartuserId/" + val);

  }

  setAmount(amount: any) {

    this.amount = amount;

  }

  getAmount() {

    return this.amount;

  }

  updateCart(cart: any) {

    return this.httpclient.put("http://localhost:8080/cart/list", cart)
  }

  addToCart(data: any) {

    console.log(data);
    this.userDetails = localStorage.getItem("user");
    this.userDetails = JSON.parse(this.userDetails);
    this.cart.userId = this.userDetails.userId;
    this.cart.productId = data.productId;
    this.cart.productImage = data.productImage;
    this.cart.productQuantity = 1;
    this.cart.productPrice = data.productPrice;
    this.cart.productName = data.productName;
    console.log(this.cart);
    return this.httpclient.post('http://localhost:8080/cart/list', this.cart);

  }

  cartCount(id: any) {
    return this.httpclient.get("http://localhost:8080/cart/cartcount/" + id);
  }

  removeCart(val: any) {

    return this.httpclient.delete('http://localhost:8080/cart/list/' + val)
  }

  getProductById(val: number) {

    return this.httpclient.get('http://localhost:8080/product/list/' + val);
  }

  get nativeWindow(): any {
    return _window();
  }


}




