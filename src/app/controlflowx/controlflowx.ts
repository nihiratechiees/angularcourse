import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-controlflowx',
  imports: [MatIconModule,MatToolbarModule,MatButtonModule],
  templateUrl: './controlflowx.html',
  styleUrl: './controlflowx.css',
})
export class Controlflowx {
  isloggedIn = false;
  color = 'blue';
  countries = ['India', 'USA', 'Australia']
  emplist = [
    { code: 1, name: 'ramesh', salary: 10000 },
     { code: 2, name: 'vijin', salary: 20000 },
      { code: 3, name: 'sujin', salary: 30000 }
  ]

  userrole='unknown';
}
