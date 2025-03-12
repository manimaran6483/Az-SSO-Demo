import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'app/services/employeeservice.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  employees:any = [];
  constructor(private router: Router, private empService: EmployeeService
  ) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.empService.getEmployees().subscribe(value => {
      this.employees = value;
    });
    console.log(this.employees);
  }

  onClick() {
    this.router.navigate(["/add"]);
  }
}
