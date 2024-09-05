import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CrudserviceService} from '../../../services/crudservice.service'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator,MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { SetroleComponent } from '../setrole/setrole.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{
 
  data1 : any;
  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private custService:CrudserviceService, private _dialog : MatDialog){}

  ngOnInit(): void {
    this.get();
  }

  get()
  {
    this.custService.getData().subscribe({
      next:(data : any)=>
      {
        this.data1 = data;
        console.log("Data Fetching Successfully",this.data1);
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort= this.sort;
        this.dataSource.paginator = this.paginator;
       
      },
      error:(err : any)=>{
        console.log("Oops!",err);
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openEdit(data: any)
  {
    const dialofRef = this._dialog.open(SetroleComponent,
      {data,});
      dialofRef.afterClosed().subscribe({
        next : (val) =>
        {
          if(val){
            this.get();
          }
        }
    });
  }

  delete(id : any)
  {
    
        // this.get();
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            this.custService.deleteData(id).subscribe({                    // delete logic
              next:(data1)=>
              { 
                this.data1  = this.data1.filter((item:any)=> item.id !== id)
              }
            })                                                              // delete logic end
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        });
      
  }

}
