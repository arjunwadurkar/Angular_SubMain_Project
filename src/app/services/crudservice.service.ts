import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment} from 'src/environments/environment'




@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {
 // baseUrl: string = environment.apiUrl;
  baseUrl : string = 'https://localhost:7015/';
  constructor(private http:HttpClient) { }

  // addData(data:any) : Observable<any>
  // {
  //   return this.http.post('https://localhost:7015/api/Users/adduser',data);  /// Working

  // }

  // login(data:any):Observable<any>
  // {
  //   return this.http.post<any>('https://localhost:7015/api/Users/login',data)   // Working
  // }

  // getData():Observable<any>
  // {
  //   return this.http.get<any>('https://localhost:7015/api/Users/SetRoleOfUser')  // Working
  // }
  

  // update(id:any,data : any) : Observable<any>
  // {
  //   return this.http.put(`https://localhost:7015/api/Users/UpdateUserRole/${id}`, data);  // Working
  // }

  // CheckPassword(id:any,password : string) : Observable<any>
  // {
  //   console.log(password)
  //   return this.http.post(`https://localhost:7015/api/Users/CheckPasswordByID/${id}`, {password});  //Working
  // }

  // updatePassword(id:any,password : string): Observable<any>
  // {
  //   return this.http.put(`https://localhost:7015/api/Users/UpdatePasswordById/${id}`, {password})
  // }

  // UpdateProfile(id:any,data : any) : Observable<any>
  // {
  //   return this.http.put(`https://localhost:7015/api/Users/UpdateProfile/${id}`, data);
  // }
  // deleteData(id : any) : Observable<any>
  //  {
  //    return this.http.delete(`https://localhost:7015/api/Users/DeleteUserById/${id}`)    // Working
  //  }

  // UsergetById(id:any): Observable<any>{
  //   return this.http.get<any>(`https://localhost:7015/api/Users/GetUserById/${id}`);    // Working
  //  }

   
  //  addProduct(data : any): Observable <any>{
  //   return this.http.post('https://localhost:7015/api/Products/AddProduct',data); // Working
  //  }


  //  getProductData() :Observable<any>
  //  {
  //   return this.http.get<any>('https://localhost:7015/api/Products/GetProductList');  // Working
  //  }

  //  deleteProduct(id : any) : Observable<any>
  //  {
  //    return this.http.delete(`https://localhost:7015/api/Products/DeleteProductById/${id}`) // Working
  //  }

  //  updateProduct(productid:any,data : any) : Observable<any>
  // {
  //   return this.http.put(`https://localhost:7015/api/Products/UpdateProductById/${productid}`, data); //working
  // }

  // ProductDetails(productid:any): Observable<any>{
  //   return this.http.get<any>(`https://localhost:7015/api/Products/getproductbyid/${productid}`);    // Working
  //  }


   //Environment

   addData(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}api/Users/adduser`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}api/Users/login`, data);
  }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}api/Users/SetRoleOfUser`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}api/Users/UpdateUserRole/${id}`, data);
  }

  CheckPassword(id: any, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}api/Users/CheckPasswordByID/${id}`, { password });
  }

  updatePassword(id: any, password: string): Observable<any> {
    return this.http.put(`${this.baseUrl}api/Users/UpdatePasswordById/${id}`, { password });
  }

  UpdateProfile(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}api/Users/UpdateProfile/${id}`, data);
  }

  deleteData(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}api/Users/DeleteUserById/${id}`);
  }

  UsergetById(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}api/Users/GetUserById/${id}`);
  }

  addProduct(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}api/Products/AddProduct`, data);
  }

  getProductData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}api/Products/GetProductList`);
  }

  deleteProduct(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}api/Products/DeleteProductById/${id}`);
  }

  updateProduct(productid: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}api/Products/UpdateProductById/${productid}`, data);
  }

  ProductDetails(productid: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}api/Products/getproductbyid/${productid}`);
  }

}
