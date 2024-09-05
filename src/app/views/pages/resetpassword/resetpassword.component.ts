import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {CrudserviceService} from '../../../services/crudservice.service'
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.scss'
})
export class ResetpasswordComponent implements OnInit{

  formdata : any;
  isDisabled : boolean = true;
  email:any=localStorage.getItem('email');
  userId : any = localStorage.getItem('id');
  // dataForm: any;
  

  constructor(private route: ActivatedRoute,
    private router:Router,
    private crudService: CrudserviceService, private fb:FormBuilder){}


  ngOnInit(): void {
    this.formdata = this.fb.group({
    password : ['' ,[Validators.required]],
    })

  

}
signInData(email:any)
   {
  //   console.log(email);
    
  //   this.crudService.getData().subscribe(res=>{
  //     const user = res.find((a:any)=>{
  //       return (a.email===email && this.email===email);
  //     });
  //     if(user)
  //     {

  //       alert('User Verified');

  //       // this.isDisabled=false;
        
        

  //     }
  //     else{
  //       // alert("User Not Verified");
  //     }
      

  //   });

  if(this.email==email)
  {
    alert('User Verified');
    this.isDisabled=false;

  }
  else{
        alert("User Not Verified");
       }
    

  }
  updatePassword(password:any)
  {
    console.log(this.userId);
    this.crudService.updatePassword(this.userId,password.value).subscribe({
      next:(data:any)=>{
        alert('Good')
      }
    })
  }

 
}