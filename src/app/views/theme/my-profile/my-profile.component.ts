import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudserviceService } from 'src/app/services/crudservice.service';

@Component({
  selector: 'app-my-profile',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss'
})
export class MyProfileComponent implements OnInit{

  name: any;
  email : any;
  mobile : any;
  address : any;
  state : any;
  city : any;
  pin : any;
  role :any = localStorage.getItem('role');
  

  constructor(private service:CrudserviceService){}

  ngOnInit():void{
    this.getData();
  }

  getData()
  {
    this.service.UsergetById(localStorage.getItem('id')).subscribe({
     next:(data:any)=>
     {
    this.name= data.name,
    this.email = data.email,
     this.mobile = data.mobile,
      this.address = data.address,
    this.state = data.state,
   this.city = data.city,
  this.pin = data.pin
  
     },
     error:(data:any)=>
     {
      console.log(data);
     }

    })
  }

}
