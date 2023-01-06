import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.scss']
})
export class ViewEmployeeComponent {
  id!: any;
  title !: string;
  name !: string;
  mobile !: string;
  email !: string;
  gender !: string;
  designation !: string;
  qualification!:string;
  joindate !: Date;
  buttonName!: string;
  action!:string;
  employeeObj !: any;
  constructor(private route: ActivatedRoute,
    private dataApi: DataService) {
    this.id = route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.getEmployeeById();
  }
  getEmployeeById() {
    this.dataApi.getEmployeeById(this.id).subscribe(res => {
      this.employeeObj = res;
      console.log(this.employeeObj);
    })
  }

}
