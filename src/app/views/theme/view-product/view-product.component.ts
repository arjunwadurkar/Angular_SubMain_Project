import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudserviceService } from 'src/app/services/crudservice.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-view-product',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './view-product.component.html',
  styleUrl: './view-product.component.scss'
})
export class ViewProductComponent  implements OnInit{
  
  role : any = localStorage.getItem('role');
  show : boolean = false;
  item : any;
  quantity: number = 1;
 maxQuantity: number = 10;

  constructor( private route: ActivatedRoute,
    private router:Router,
    private service:CrudserviceService,
    private cartService:CartService){}



  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var productid = param.get('productid');

      this.get(productid);

      
      
    });
  }

  get(productid : any)
  {
    this.service.ProductDetails(productid).subscribe({
      next : (data:any)=>
      {
        this.item=data;
        console.log(data);
      },
      error :(data: any) =>{
        console.log(data);
      }
      
    })
  }
  cartData : any={
    userId : localStorage.getItem('id'),
    productId :'',
    quantity : 1,
  }



  AddToCart(productid : any){
    this.cartData.productId=productid;
    this.cartService.AddItemInCart(this.cartData).subscribe({
      next : (data : any)=>{
        alert("done");
      },
      error : (data : any)=>{
             alert("Something Went Wrong");
      }
    })
    
  }

  }

