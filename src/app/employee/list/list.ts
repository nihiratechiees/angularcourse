import { Component, signal } from '@angular/core';
import { EmployeeListModel, EmployeeModel } from '../../_model/employeemodel';
import { Api } from '../../service/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {

  constructor(private api: Api,private router: Router) { }
  emplist = signal<EmployeeListModel[]>([]);
  ngOnInit() {
    this.api.GetallEmployee().subscribe(items => {
      this.emplist.set(items);
    });
  }

  deleteEmployee(id: string) {
    if(confirm('Are you sure to delete this employee?')) {
      this.api.deleteEmployee(id).subscribe(() => {
        // Refresh the list after deletion
        this.api.GetallEmployee().subscribe(items => {
          this.emplist.set(items);
        });
      });
    }
  }

  editEmployee(id: string) {
    this.router.navigate(['/editemployee', id]);
  }
  navigateToAdd() {
    this.router.navigate(['/addemployee']);
  }

}
