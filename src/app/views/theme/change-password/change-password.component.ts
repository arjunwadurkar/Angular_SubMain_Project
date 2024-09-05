import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudserviceService } from 'src/app/services/crudservice.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-change-password',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent implements OnInit{

  MyForm : any
 show : boolean =false;
 isDisabled : boolean = true;
  constructor(private service:CrudserviceService , 
              private fb : FormBuilder, private route : Router,
              private toast:NgToastService){ }


  ngOnInit(): void {
    this.MyForm= this.fb.group({
      currentPassword : [''],
      password : [{value: '', disabled: this.isDisabled},],
      confirmPassword : [{value: '', disabled: this.isDisabled},],
    });
  }

  VerifyPassword(password : string){
    
 
    this.service.CheckPassword(localStorage.getItem('id'),password).subscribe({
      next:(data : any)=>{
        this.show=true;
        this.isDisabled=false;
        this.MyForm.get('password').enable(); // Enable password field
        this.MyForm.get('confirmPassword').enable();
        this.toast.success({detail:"SUCCESS",summary:'Password Verified',duration:2000, position:'topCenter'});
      },error:(data:any)=>{
        this.toast.error({detail:"ERROR",summary:'Password not Match',sticky:true, position:'topCenter'});
        
      }
    })
  }


  ChangePassword(password : any){
    this.service.updatePassword(localStorage.getItem('id'),password).subscribe({
      next : (data:any)=>{
        
        this.route.navigate(['./']);
        localStorage.clear();
      
          this.toast.success({detail:"SUCCESS",summary:'Password Changed',duration:2000, position:'topCenter'});
        
      },
      error : (data : any)=>{
        this.toast.error({detail:"ERROR",summary:'Something Went Wrong',sticky:true, position:'topCenter'});
      }
    })
  }

}
