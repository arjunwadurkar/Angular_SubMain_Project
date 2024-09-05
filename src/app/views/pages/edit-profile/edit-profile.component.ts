import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {CrudserviceService} from '../../../services/crudservice.service'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss'
})
export class EditProfileComponent implements OnInit {

  User: any;                                 ///Recive Data fron GetbyId
  userId : any = localStorage.getItem('id');
  MyForm : any;

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

  saveProfile(){}

}
