import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeeService } from '../services/employeeservice.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  employee!: Employee;
  constructor(private empService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.empService.getEmployeeById(id).subscribe(data => {
      this.employee = data;
      console.log(this.employee.gender);
    });
  }
  onDelete() {
    this.empService.deleteEmployee(this.employee.id).subscribe(data => {
      this.router.navigate(["/employees"]);
    });

  }
  onCancel() {
    this.router.navigate(["/employees"]);
  }

}
