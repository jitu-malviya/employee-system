import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Employee } from './interface/employee';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private afs: AngularFirestore, private fireStorage: AngularFireStorage) { }
  // add employee
  addEmployee(employee: Employee) {
    employee.id = this.afs.createId();
    return this.afs.collection('/Employees').add(employee);
  }
  // get all employee
  getAllEmployees() {
    return this.afs.collection('/Employees').snapshotChanges();
  }

  // delete employee
  deleteEmployee(employee: Employee) {
    return this.afs.doc('/Employees/' + employee.id).delete();
  }
  //update employee
  updateEmployee(employee: Employee) {
    this.deleteEmployee(employee);
    this.addEmployee(employee);
  }
}
