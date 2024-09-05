import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit {

   email:any = localStorage.getItem('name');
   visiblerole : any = localStorage.getItem('role');
   show : boolean = false;
   

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private classToggler: ClassToggleService, private router : Router) {
    super();
  }
  ngOnInit(): void {
    if(this.visiblerole==='admin')
    {
      this.show=true
    }
   
  }

  logout() {
    // localStorage.removeItem('email');
    // localStorage.removeItem('role');
    // localStorage.removeItem('name');
    localStorage.clear();
    // Other logout-related logic, such as navigating to the login page
    this.router.navigate(['./']);

  }

  
 

}
