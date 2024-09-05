import { Component, OnInit, PipeTransform } from '@angular/core';
import {CrudserviceService} from '../../../services/crudservice.service'
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { AddproductComponent } from '../addproduct/addproduct.component';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  filtername: any='';
 
  data1: any;
  filteredData: any;
  visiblerole : any = localStorage.getItem('role');
   show : boolean = false;
   

  constructor(private custService:CrudserviceService, private _dialog : MatDialog
    , private cartService : CartService)
  {

  }

  ngOnInit(): void {
    this.get();
    if(this.visiblerole==='admin')
   {
     this.show=true
   }
  }

  get()
  {
    this.custService.getProductData().subscribe({
      next:(data:any)=>
      {
        this.data1=data;
        this.filteredData = [...this.data1]; 
              console.log(this.data1);
      },
      error:(err : any)=>{
        console.log("Oops!",err);
      }

    })
  }
  applyFilter() {
    this.filteredData = this.data1.filter((item : any) => {
      // Add your filter logic here based on the filtername criteria
      // For example, if you want to filter based on item.title:
      return item.title.toLowerCase().includes(this.filtername.toLowerCase());
    });
  }
 
  buyNow(item: any){}

  delete(productid : any)
  {
    console.log(productid);
        // this.get();
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            this.custService.deleteProduct(productid).subscribe({  
                                // delete logic
              next:(data1)=>
              { 
                this.data1  = this.data1.filter((item:any)=> item.productid !== productid)
                this.get();
              },
              error :(data: any)=>
              {
                console.log(data);
              }
            })                                                              // delete logic end
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        });
      
  }

  openEdit(data: any)
  {
    const dialofRef = this._dialog.open(AddproductComponent,
      {data,  width: '500px',height: '400px',panelClass: 'custom-dialog',
      position: {
        top: '150px', // Customize the top position
        // Customize the left position
      }
    });
      dialofRef.afterClosed().subscribe({
        next : (val) =>
        {
          if(val){
            this.get();
          }
        }
    });
  }

  openSignUp()
  {
    const dialofRef =this._dialog.open(AddproductComponent,{
      width: '500px',height: '400px',panelClass: 'custom-dialog',
      position: {
        top: '150px', // Customize the top position
        // Customize the left position
      }
    });
    dialofRef.afterClosed().subscribe({
        next : (val) =>
        {
          if(val){
            this.get();
          }
        }
    });
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


