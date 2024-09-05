import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment} from 'src/environments/environment'



@Injectable({
  providedIn: 'root'
})
export class CartService {
 // baseUrl: string = environment.apiUrl;
  baseUrl : string = 'https://localhost:7015/';


  constructor(private http:HttpClient) { }

  // getCartItem(id : any): Observable<any>
  // {
  //   return this.http.get(`https://localhost:7015/GetCartItems/${id}`)  // Working
  // }
  // AddItemInCart(data : any):Observable<any>
  // {
  //   return this.http.post('https://localhost:7015/api/CartItem/AddItemInCart',data); //Working
  // }

  // UpdateQuantity(data : any ): Observable<any>
  // {
  //   return this.http.put('https://localhost:7015/api/CartItem/UpdateCartItemQuantity',data);// Working
  // }
  // deleteCartItem(userId: any, productId: number): Observable<any> {
  //   return this.http.delete<any>(`https://localhost:7015/api/CartItem/DeleteCartItem?userId=${userId}&productId=${productId}`);
  // }

  getCartItem(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}GetCartItems/${id}`);
  }

  AddItemInCart(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}api/CartItem/AddItemInCart`, data);
  }

  UpdateQuantity(data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}api/CartItem/UpdateCartItemQuantity`, data);
  }

  deleteCartItem(userId: any, productId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}api/CartItem/DeleteCartItem?userId=${userId}&productId=${productId}`);
  }
}
