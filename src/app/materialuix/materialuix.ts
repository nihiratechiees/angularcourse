import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-materialuix',
  imports: [MatButtonModule,MatCheckboxModule,MatRadioModule,MatFormFieldModule,
    MatInputModule,MatToolbarModule,MatIconModule
  ],
  templateUrl: './materialuix.html',
  styleUrl: './materialuix.css',
})
export class Materialuix {

}
