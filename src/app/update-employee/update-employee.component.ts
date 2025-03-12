import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeeService } from '../services/employeeservice.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee!: Employee;
  constructor(private empService: EmployeeService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.empService.getEmployeeById(id).subscribe((data) => {
      this.employee = data;
    });
  }
  onSubmit(employee: Employee) {
    this.empService.updateEmployee(employee).subscribe(data => {
      this.router.navigate(["/employees"]);
    })
  }
  onCancel() {
    this.router.navigate(["/employees"]);
  }


}
