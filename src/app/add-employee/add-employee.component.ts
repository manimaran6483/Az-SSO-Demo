	import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeeService } from '../services/employeeservice.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  constructor(private empService: EmployeeService,
    private router: Router) { }

  onSubmit(employee: Employee) {
    this.empService.addEmployee(employee).subscribe(data => {
      this.router.navigate(["/employees"]);
    });
  }
  onCancel() {
    this.router.navigate(["/employees"]);
  }
}
