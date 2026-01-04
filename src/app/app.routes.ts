import { Routes } from '@angular/router';
import { Interpolx } from './interpolx/interpolx';
import { Controlflowx } from './controlflowx/controlflowx';

export const routes: Routes = [
    {
        path:'interpol',component:Interpolx
    },
    {
        path:'controlflow',component:Controlflowx
    }
];
