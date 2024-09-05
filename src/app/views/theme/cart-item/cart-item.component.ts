import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent implements OnInit{


  quantity: number =1  ;
  maxQuantity: number = 10;
  data : any;
  cartData : any={
    userId : localStorage.getItem('id'),
    productId :'',
    quantity : 1,
  }
  
  constructor(private service : CartService){}


  ngOnInit(): void {
   this.get();
  }
  get(){
    this.service.getCartItem(localStorage.getItem('id')).subscribe({
      next : (data:any)=>{
        this.data=data;
        
        console.log(data);
      },error:(data : any)=>{
        console.log(data);
      }
     })

  }




  increment(item:any) {
    this.cartData.quantity=item.quantity;
    this.cartData.productId=item.productId;
    if(this.cartData.quantity<10){
      this.cartData.quantity++;
      this.service.UpdateQuantity(this.cartData).subscribe({
        next:(data:any)=>{
          this.get();
        },
        error:(data:any)=>{
            alert('Something Went Wrong');
        }
      });
    }
  }

  decrement(item:any) {
    this.cartData.quantity=item.quantity;
    this.cartData.productId=item.productId;
    if(this.cartData.quantity>1){
      this.cartData.quantity--;
      this.service.UpdateQuantity(this.cartData).subscribe({
        next:(data:any)=>{
          this.get();
        },
        error:(data:any)=>{
            alert('Something Went Wrong');
        }
      });
    }
  }

  deleteCartItem( productId: number){
     this.service.deleteCartItem(localStorage.getItem('id'),productId).subscribe({
      next:(data:any)=>{
        this.get();
      }
     })
  }
}
