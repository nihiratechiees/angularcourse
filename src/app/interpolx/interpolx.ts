import { AsyncPipe, CommonModule, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { MultiplyPipe } from '../pipes/multiply-pipe';

@Component({
  selector: 'app-interpolx',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,CurrencyPipe,
    DatePipe,DecimalPipe,PercentPipe,SlicePipe,JsonPipe,AsyncPipe,
    MultiplyPipe
  ],
  templateUrl: './interpolx.html',
  styleUrl: './interpolx.css',
})
export class Interpolx {

  firstname='Nihira'
  lastname='Techiees'
  course='angular tutorial'
  Salary=10000.529;
  today=new Date();
  value=0.1356;
  userdata={
    'name':'nihira',
    'course':'angular',
    'ver':21
  }
  part=of('Part4');


}
