import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httclient:HttpClient) {

   }
   getusers(){
    return this.httclient.get("http://localhost:8080/")
   }
}
