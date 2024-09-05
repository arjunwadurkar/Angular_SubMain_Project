import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CrudserviceService} from "../../../services/crudservice.service"
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formData : any;
  registerForm1: any;

  constructor(
    private fb : FormBuilder, 
    private router : Router,
    private custservice:CrudserviceService,
    private toast:NgToastService) { }


  ngOnInit(): void {
    this.formData = this.fb.group({
      name : ['' , [Validators.required]],
      email : ['' ,[Validators.required, Validators.email]],
      password : ['',[Validators.required,Validators.minLength(7)]],
      cpassword : ['',[Validators.required]],
      role :['user'],
      mobile :[''],
      address : [''],
      state : [''],
      city : [''],
      pin : ['']

    },
    {
      validators:this.MustMatch('password', 'cpassword')
    }
    );
  
  }
  MustMatch(formcontrol : string, matchingFormControl : string)
  {
     return(formGroup  : FormGroup)=>
     {
      const control = formGroup.controls[formcontrol];
      const matchingControl = formGroup.controls[matchingFormControl];

      if(matchingControl.errors && !matchingControl.errors['MustMatch']){
        return
      }
      if(control.value !== matchingControl.value){
        matchingControl.setErrors({MustMatch:true});
      }
      else{
        matchingControl.setErrors(null);
      }

     }
  }
 

  sendData()
  {

    if(this.formData.valid )
    {
      console.log(this.formData.value);

      // this.custservice.getData().subscribe(res=>{
      //   const user = res.find((a:any)=>{
          
      //     return a.email===this.formData.value.email ;
      //   });
      //   if(user)
      //   {
      //     this.toast.error({detail:"SORRY",summary:'You Are Already Registered',sticky:true, position:'topCenter'});
          
      //   }
      //  else{
          // delete this.formData.cpassword
          const formDataWithoutCPassword = { ...this.formData.value };
          delete formDataWithoutCPassword.cpassword;
          this.custservice.addData(formDataWithoutCPassword).subscribe({
            next:(data:any) =>{
              console.log(data)
              this.toast.success({detail:"SUCCESS",summary:'Imformation Saved',duration:5000,position:'topCenter'});
                this.router.navigate(['./']);
            },
            error: (data : any)=>{
              this.toast.error({detail:"ERROR",summary:'You Are Already Something Went Wrong',sticky:true, position:'topCenter'});
            }, 
          })
      //  }  
     // }  );
     
    }
  }

}
