import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudserviceService } from 'src/app/services/crudservice.service';

@Component({
  selector: 'app-setrole',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './setrole.component.html',
  styleUrl: './setrole.component.scss'
})
export class SetroleComponent {
  registerForm1 : any;
  data : any;
  constructor(private fb : FormBuilder, 
    private custservice:CrudserviceService,
     private dialofRef:MatDialogRef<SetroleComponent>,
     @Inject (MAT_DIALOG_DATA) public data1: any)
  {
    
  }

  ngOnInit(): void {
    this.registerForm1 = this.fb.group({
      id: [''],  
      name: [''],  
      email: [''], 
      role :[''], 
      
    });


    this.registerForm1.patchValue(this.data1);
  }
  




  sendData()
   {
  if(this.registerForm1.valid)
  {
    if(this.data1)
    { /////// For Update
      this.custservice.update(this.data1.id,this.registerForm1.value).subscribe({
        next:(data:any) =>{
          this.dialofRef.close(true);
            alert('Data Updated!!!');    
        },
        error: (data : any)=>{
          console.error('Oops !!!', data);
        },
      })
    }

  }
}
}
  
