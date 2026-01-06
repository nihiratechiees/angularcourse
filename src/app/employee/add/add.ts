import { Component, signal } from '@angular/core';
import { EmployeeModel } from '../../_model/employeemodel';
import { email, Field, form, maxLength, minLength, required } from '@angular/forms/signals';
import { Api } from '../../service/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  imports: [Field],
  templateUrl: './add.html',
  styleUrl: './add.css',
})
export class Add {

  title = signal('Add Employee');
  editmode = signal(false);
  empId = signal('');

  ngOnInit() {
    this.empId.set(this.act.snapshot.params['id'] || '');
    if (this.empId()) {
      this.editmode.set(true);
      this.title.set('Edit Employee');
      this.SetEditEmployee(this.empId());
    }
  }


  constructor(private api: Api, private router: Router, private act: ActivatedRoute) { }

  empModel = signal<EmployeeModel>({
    firstname: '',
    lastname: '',
    email: '',
    phoneno: '',
    address: '',
    iscontract: false
  })

  empForm = form(this.empModel, (schemaPath) => {
    required(schemaPath.firstname, { message: 'First Name is required' });
    minLength(schemaPath.firstname, 5, { message: 'First Name should be minimum 5 characters' });
    maxLength(schemaPath.firstname, 15, { message: 'First Name should be maximum 15 characters' });
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, { message: 'Email is not valid' });
    required(schemaPath.phoneno, { message: 'Phone No is required' });
    required(schemaPath.address, { message: 'Address is required' });

  });

  Saveemployee(event: Event) {
    event.preventDefault();
    if (this.empForm().valid()) {
      if (this.editmode()) {
        this.api.UpdateEmployee(this.empId(), this.empForm().value()).subscribe(item => {
          alert('Employee updated successfully');
          this.router.navigate(['/employee']);
        })
      } else {
        this.api.SaveEmployee(this.empForm().value()).subscribe(item => {
          alert('Employee created successfully');
          this.router.navigate(['/employee']);
        })
      }
    }
  }

  SetEditEmployee(id: string) {
    this.api.getEmployeeById(id).subscribe(item => {
      this.empModel.set(item);
      // this.empForm().setValue(item);
    });

  }

}
