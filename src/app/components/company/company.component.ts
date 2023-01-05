import { Employee } from './../../service/interface/employee';
import { DataService } from './../../service/data.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, ViewChild } from '@angular/core';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  employeeArr: Employee[] = [];

  displayedColumns: string[] = ['name', 'mobile', 'email', 'gender','department', 'joindate', 'qualification', 'action'];
  dataSource!: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    public dialog: MatDialog, private dataApi: DataService, private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }


  addemployee() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Employee Attendance List',
      buttonName: 'Register'
    }
    const dialogRef = this.dialog.open(AddemployeeComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        // console.log("Employee Attendance List: ", data);
        this.dataApi.addEmployee(data);
        this.openSnackBar("Registration of Employee is success.", "OK");
      }
    })
  }

  editEmployee(row:any) {
    if(row.id == null || row.name == null){
      return;
    }
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = row;
    dialogConfig.data.title ="Edit Employee";
    dialogConfig.data.buttonName ="update";
    dialogConfig.data.birthdate = row.birthdate.toDate();
    const dialogRef = this.dialog.open(AddemployeeComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        // console.log("Employee Attendance List: ", data);
        this.dataApi.updateEmployee(data);
        this.openSnackBar(" Employee is  updated  successfully.", "OK");
      }
    })
  }
  getAllEmployees() {
    this.dataApi.getAllEmployees().subscribe(res => {
      this.employeeArr = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
  
      this.dataSource = new MatTableDataSource(this.employeeArr);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
