import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudserviceService } from 'src/app/services/crudservice.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {NgToastService} from 'ng-angular-popup';

@Component({
  selector: 'app-addproduct',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.scss'
})
export class AddproductComponent {

  dataForm: any;

  constructor(private fb: FormBuilder ,  
    private router : Router,
    private custservice:CrudserviceService,
    private dialofRef:MatDialogRef<AddproductComponent>,
    @Inject (MAT_DIALOG_DATA) public data1: any,
    private toast:NgToastService) { }

  ngOnInit(): void {
    this.dataForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      image: ['', Validators.required],
      
        rate: ['', Validators.required],
        count: ['', Validators.required]
    
    });


  this.dataForm.patchValue(this.data1);
  }

  onSubmit() {
    // Handle form submission
    if (this.dataForm.valid) {
      // console.log(this.dataForm.value)
      // console.log(this.data1.productid)
      if(this.data1)
     
      { /////// For Update
        this.custservice.updateProduct(this.data1.productid,this.dataForm.value).subscribe({
          next:(data:any) =>{
             
              this.dialofRef.close(true);
              this.toast.success({detail:"SUCCESS",summary:'Imformation Updated',duration:3000,position:'topCenter'});
                 
          },
          error: (data : any)=>{
            console.error('Oops !!!', data);
          },
        })
      }
      else{
      this.custservice.addProduct(this.dataForm.value).subscribe({
        next:(data:any) =>{
          console.log(data)
            
            this.dialofRef.close(true);
            this.toast.success({detail:"SUCCESS",summary:'Imformation Saved',duration:5000,position:'topCenter'});
            
        },
        error: (data : any)=>{
          this.toast.error({detail:"ERROR",summary:'Something Went Wrong',sticky:true, position:'topCenter'});
        }, 
      })
    }
    }
  }

}
