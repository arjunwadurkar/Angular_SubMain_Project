import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudserviceService } from 'src/app/services/crudservice.service';
import {NgToastService} from 'ng-angular-popup';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    
  signinForm:any;
  constructor(private fb: FormBuilder, private services:CrudserviceService, private router:Router,
    private toast:NgToastService) { }


  ngOnInit(): void {
    this.signinForm=this.fb.group({
      email : ['' , [Validators.required, Validators.email]],
      password : ['',[Validators.required, Validators.minLength(7)]],

    });
  }
  //  logindata
  localemail : any;
  localRole : any;
  localName : any;
  localId:any
  // signInData()
  // {
  //   this.services.login(this.signinForm.value).subscribe({

  //     next : (data : any) =>{
  //       this.toast.success({detail:"SUCCESS",summary:'Your Success Message',duration:3000});
  //       // this.router.navigate(['theme']);
  //       console.log(data);
  //     },
  //     error : (err:any) =>
  //     {
  //       console.log(err);
  //     }
      // const user = res.find((a:any)=>{
      //   this.localemail=a.email;
      //   this.localRole = a.role;
      //   this.localName= a.name;
      //   this.localId=a.id;
      //   return a.email===this.signinForm.value.email && a.password===this.signinForm.value.password ;
      // });
      // if(user)
      // {
      //   localStorage.setItem('email', this.localemail);
      // localStorage.setItem('role', this.localRole);
      // localStorage.setItem('name',this.localName)
      // localStorage.setItem('id',this.localId)

      // this.toast.success({detail:"SUCCESS",summary:'Your Success Message',duration:3000});

      //   //localStorage.setItem('logindata',JSON.stringify())
      //  // alert('Login Successfully');
      //  this.toast.success({detail:"WELCOME",summary:'Login Successfully',duration:3000, position:'topCenter'});
      
       
      //   this.router.navigate(['theme']);

      // }
      // else{
      //   Swal.fire({
      //     icon: 'error',
      //     title: 'Oops !!!',
      //     text: 'Something went wrong!',
      //   });
        
       
      // }
      

  //   });
    

  // }

  signInData(){ 
    this.services.login(this.signinForm.value).subscribe({
     
      next :(data :any)=>{
        this.toast.success({detail:"SUCCESS",summary:'Your Success Message',duration:3000,position:'topCenter'});
        localStorage.setItem('name',data.user.name)
        localStorage.setItem('id',data.user.id)
        localStorage.setItem('role',data.user.role)
        this.router.navigate(['theme']);
      },
      error : (data :any)=>
      {
       // console.log(data);
        Swal.fire({
              icon: 'error',
              title: 'Oops !!!',
              text: 'Something went wrong!',
            });
      }
    })
  }

}
