import { Routes } from '@angular/router';

import { FormTasksComponent } from './components/form-tasks/form-tasks.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';

export const routes: Routes = [
    {path: '',redirectTo:'/tareas',pathMatch:'full'},
    {path:'tareas',component:TasksListComponent},
    {path:'tareas/new',component: FormTasksComponent},
    {path:'tareas/:id/edit', component: FormTasksComponent}
];
