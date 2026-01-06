import { Routes } from '@angular/router';
import { Interpolx } from './interpolx/interpolx';
import { Controlflowx } from './controlflowx/controlflowx';
import { Signalformx } from './signalformx/signalformx';
import { Add } from './employee/add/add';
import { List } from './employee/list/list';

export const routes: Routes = [
    {
        path:'interpol',component:Interpolx
    },
    {
        path:'controlflow',component:Controlflowx
    },
    {
        path:'signalform',component:Signalformx
    },
    {
        path:'addemployee',component:Add
    },
    {
        path:'employee',component:List
    },
    {
        path:'editemployee/:id',component:Add
    }
];
