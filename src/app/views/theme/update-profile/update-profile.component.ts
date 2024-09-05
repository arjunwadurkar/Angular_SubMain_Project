import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudserviceService } from 'src/app/services/crudservice.service';

@Component({
  selector: 'app-update-profile',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.scss'
})
export class UpdateProfileComponent {

  User: any;                                 ///Recive Data fron GetbyId
  userId : any = localStorage.getItem('id');
  MyForm : any;
  role: any = localStorage.getItem('role');
  name : any ;
  email:any;
  constructor(private route: ActivatedRoute,
    private router:Router,
    private service :CrudserviceService,
    private fb:FormBuilder){}
  
  
  
  
  ngOnInit(): void {
    // this.route.paramMap.subscribe((params ) =>
    // {
    //   var id = params.get('id');
    //   this.service.UsergetById('id');
    // }  this.registerForm1.patchValue(this.data1);
    // );
    this.MyForm=this.fb.group({
      name :[''],
      email : [''],
      mobile :[''],
      address : [''],
      state : [''],
      city : [''],
      pin :['']
    });
    this.getById();
   // this.MyForm.patchValue(this.User);
    
  }
  getById() {
    this.service.UsergetById(this.userId).subscribe((data: any) => {
      console.log('Data received:', data);
      this.User = data;
      console.log(this.User);
      this.name=this.User.name;
      this.email=this.User.email;


      this.MyForm.patchValue({
        name: this.User.name,
        email: this.User.email,
        mobile: this.User.mobile,
        address: this.User.address,
        state: this.User.state,
        city: this.User.city,
        pin: this.User.pin
      });


    });
  }

  saveProfile(){
    if(this.MyForm.valid)
    {
      this.service.UpdateProfile(localStorage.getItem('id'),this.MyForm.value).subscribe({
        next : (data: any)=>
        {
          alert("Done");
        },
        error:(data : any)=>
        {
          alert('Opps!!!');
        }
      })
    }
    
  }


}
